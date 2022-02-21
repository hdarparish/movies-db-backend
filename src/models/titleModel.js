import mongoose from "mongoose";
import { config } from "dotenv";

config();

const titleSchema = new mongoose.Schema({
  title: String,
  released: String, //integer
  ageRestriction: String,
  runtime: String,
  genre: [{ type: String }],
  description: String,
  actors: [{ type: String }],
  directors: [{ type: String }],
  poster: String,
  rating: mongoose.Types.Decimal128, //double
  votes: Number, //String
  imdbLink: String,
});

export default mongoose.model("Title", titleSchema);
