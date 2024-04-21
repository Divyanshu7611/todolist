import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../../models/Todo";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../../utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todoTask, done, id } = await request.json();
  try {
    await ConnectMongoDB();
    if (!todoTask) {
      return NextResponse.json(
        {
          success: false,
          message: "Field required",
        },
        { status: 404 }
      );
    }
    const createTodo = await todoModel.create({
      todoTask,
      done: false,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Todo created successfully",
        id: id,
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
