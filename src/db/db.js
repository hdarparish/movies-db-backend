/* import mongoose from "mongoose";
import connectDB from "./config.js"; 

connectDB();*/
import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const getMovies = async () => {
  const client = new MongoClient(process.env.DB_CONNECTION);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.DB_COLLECTION);
    const data = await collection.find({}).toArray();

    return data;
  } catch (err) {
    console.error(err);
  }
  client.close();
};

export { getMovies };
