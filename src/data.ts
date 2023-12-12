import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ts-app-tutorial");
    console.log(">>> Database connected :)");
  } catch {
    console.log("Error");
  }
}

export default connect;
