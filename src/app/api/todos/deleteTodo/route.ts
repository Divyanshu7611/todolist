import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../../models/Todo";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../../utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await ConnectMongoDB();

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get("id");
    console.log(id);
    const existingTodo = await todoModel.findById(id);
    if (!existingTodo) {
      return NextResponse.json(
        { success: false, message: "Todo not found" },
        { status: 404 }
      );
    }

    await todoModel.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Todo deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error();
  } finally {
    await DisconnectMongoDB();
  }
}
