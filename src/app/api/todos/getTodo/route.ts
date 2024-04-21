import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../../models/Todo";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../../utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await ConnectMongoDB();
    const Todo = await todoModel.find({});
    return NextResponse.json(
      {
        succes: true,
        message: "All todo get Successfully",
        data: Todo,
      },
      { status: 200 }
    );
    await DisconnectMongoDB();
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
