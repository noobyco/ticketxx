import "server-only";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const db = async () => {
  if (mongoose.connections.readyState !== "1") {
    console.log("Already connected");
  }
  const database = await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
};

export default db;
