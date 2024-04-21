import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../../models/Todo";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../../utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { todoTask, done } = await req.json();
  try {
    await ConnectMongoDB();
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id");
    console.log(id);
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      { todoTask, done },
      { new: true }
    );
    if (!updatedTodo) {
      return NextResponse.json(
        {
          success: false,
          message: "Todo not found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Todo updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
