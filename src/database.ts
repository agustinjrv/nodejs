import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/node-tutorial");
    console.log("server iniciado");
  } catch {
    console.log("Error");
  }
}

export default connect;
