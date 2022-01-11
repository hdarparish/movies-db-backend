import express from "express";
import dotenv from "dotenv";
import routes from "./routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("hello to movies db backend");
});

export default app.listen(port, () =>
  console.log(`API server ready on http://localhost:${port}`)
);
