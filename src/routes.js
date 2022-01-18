import express, { request, response } from "express";
import * as db from "./db/db.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const page = parseInt(request.query.page) || 0;
  const data = await db.getTopMovies(page);
  return response.status(200).send(data);
});
router.get("/category", async (request, response) => {
  const category = request.query.category;
  const page = parseInt(request.query.page) || 0;
  const data = await db.getCategoryMovies(category, page);
  return response.status(200).send(data);
});
router.get("/movie/:id", async (request, response) => {
  const movieID = request.params.id;
  const data = await db.getMovieDetail(movieID);
  return response.status(200).send(data);
});
router.get("/search", async (request, response) => {
  const query = request.query.query;
  const page = parseInt(request.query.page) || 0;
  const data = await db.getSearchQuery(query, page);
  return response.status(200).send(data);
});

export default router;
