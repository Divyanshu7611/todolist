import { Request, Response } from "express";
import { ConnectMongoDB, DisconnectMongoDB } from "@/utils/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, password, confirmPassword, gender } =
    await request.json();

  try {
    await ConnectMongoDB();
    // Validation
    if (!name || !email || !password || !confirmPassword || !phone || !gender) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all details",
        },
        { status: 403 }
      );
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "User Already Exists",
        },
        { status: 400 }
      );
    }
    // Match password
    if (password !== confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Password did not match",
        },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password || "", 10);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
      phone,
    });

    // Return response
    await DisconnectMongoDB();
    return NextResponse.json(
      {
        success: true,
        message: "User Entry Created Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
