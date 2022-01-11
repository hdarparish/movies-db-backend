import express, { request, response } from "express";
import * as db from "./db/db.js";

const router = express.Router();

router.get("/", async (request, response) => {
  const data = await db.getMovies();
  return response.status(200).send(data);
});

export default router;
