import express, { request, response } from "express";
import {
  getTopMovies,
  getCategoryMovies,
  getMovieDetail,
  getSearchQuery,
} from "./controllers/moviesController.js";

const router = express.Router();

router.get("/", getTopMovies);

router.get("/category", getCategoryMovies);

router.get("/movie/:id", getMovieDetail);

router.get("/search", getSearchQuery);

export default router;
