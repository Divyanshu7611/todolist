import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URL ||
  "mongodb+srv://dvyanshudb:t4cNwb8WoHuqg8hJ@cluster0.0ikjeoq.mongodb.net/todoApp";

export const ConnectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return await mongoose.connect(MONGODB_URI, { family: 4 });
  }
};
export const DisconnectMongoDB = async () => {
  return await mongoose.disconnect();
};
