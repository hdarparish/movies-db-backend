import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello to movies db backend");
});

export default app.listen(port, () =>
  console.log(`API server ready on http://localhost:${port}`)
);
