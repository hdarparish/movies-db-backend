import express, { request, response } from "express";
import * as db from "./db/db.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const skip = parseInt(request.query.skip) || 0;
  const data = await db.getTopMovies(skip);
  return response.status(200).send(data);
});
router.get("/genre", async (request, response) => {
  const genre = request.query.genre;
  const skip = parseInt(request.query.skip) || 0;
  const data = await db.getGenreMovies(genre, skip);
  return response.status(200).send(data);
});
router.get("/movie/:id", async (request, response) => {
  const movieID = request.params.id;
  const data = await db.getMovieDetail(movieID);
  return response.status(200).send(data);
});

export default router;
