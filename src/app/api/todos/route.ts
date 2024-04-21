import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../models/Todo";
import { ConnectMongoDB, DisconnectMongoDB } from "../../../utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ConnectMongoDB();

  switch (req.method) {
    case "GET":
      try {
        const todos = await todoModel.find({});
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(500).json({ success: false, error: "Server Error" });
      }
      break;
    case "POST":
      try {
        const todo = await todoModel.create(req.body);
        res.status(201).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false, error: "Bad Request" });
      }
      break;
    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}
