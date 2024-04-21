// pages/api/todos/[id].ts
import { NextApiRequest, NextApiResponse } from "next";
import todoModel from "../../../models/Todo";
import { DisconnectMongoDB, ConnectMongoDB } from "../../../utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await ConnectMongoDB();

  switch (req.method) {
    case "GET":
      try {
        const todo = await todoModel.findById(id);
        if (!todo) {
          return res
            .status(404)
            .json({ success: false, error: "Todo not found" });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(500).json({ success: false, error: "Server Error" });
      }
      break;
    case "PUT":
      try {
        const todo = await todoModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        if (!todo) {
          return res
            .status(404)
            .json({ success: false, error: "Todo not found" });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false, error: "Bad Request" });
      }
      break;
    case "DELETE":
      try {
        const deletedTodo = await todoModel.findByIdAndUpdate(id);
        if (!deletedTodo) {
          return res
            .status(404)
            .json({ success: false, error: "Todo not found" });
        }
        res.status(200).json({ success: true, data: deletedTodo });
      } catch (error) {
        res.status(500).json({ success: false, error: "Server Error" });
      }
      break;
    default:
      res.status(405).json({ success: false, error: "Method Not Allowed" });
      break;
  }
}
