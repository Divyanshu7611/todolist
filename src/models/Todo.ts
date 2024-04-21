import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  todoTask: {
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const todoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default todoModel;
