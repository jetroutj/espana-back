import mongoose from "mongoose";

export async function connectDBForTesting() {
  try {
    const dbUri = "mongodb://127.0.0.1:27017";
    const dbName = "bet_upick";
    await mongoose.connect(dbUri, {
      dbName,
      autoCreate: true,
    });
    console.log("DB connect true");
  } catch (error) {
    console.log("DB connect error");
  }
}

export async function disconnectDBForTesting() {
  try {
    await mongoose.connection.close();
    console.log("DB disconnect true");
  } catch (error) {
    console.log("DB disconnect error");
  }
}