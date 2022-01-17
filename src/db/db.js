import { MongoClient, ObjectId } from "mongodb";
import { config } from "dotenv";

config();

const getTopMovies = async (skip = 0) => {
  const client = new MongoClient(process.env.DB_CONNECTION);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.DB_COLLECTION);
    const data = await collection
      .find()
      .sort({ votes: -1 })
      .skip(skip) //skips 20 movies
      .limit(20) //limits the results to 20 movies
      .toArray();

    return data;
  } catch (err) {
    console.error(err);
  }
  client.close();
};
const getGenreMovies = async (genre, skip = 0) => {
  const client = new MongoClient(process.env.DB_CONNECTION);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.DB_COLLECTION);
    const data = await collection
      .find({ genre: genre })
      .sort({ votes: -1 })
      .skip(skip) //skips 20 movies
      .limit(20) //limits the results to 20 movies
      .toArray();

    return data;
  } catch (err) {
    console.error(err);
  }
  client.close();
};
const getMovieDetail = async (movieID) => {
  const client = new MongoClient(process.env.DB_CONNECTION);
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const collection = db.collection(process.env.DB_COLLECTION);
    const data = await collection.find({ _id: ObjectId(movieID) }).toArray();
    return data[0];
  } catch (err) {
    console.error(err);
  }
  client.close();
};

export { getTopMovies, getGenreMovies, getMovieDetail };
