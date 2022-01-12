import express from "express";
import cors from "cors";
import routes from "./routes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

const corsOptions = {
  origin: [process.env.WHITELIST_URL1, process.env.WHITELIST_URL2],
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", routes);

export default app.listen(port, () =>
  console.log(`API server ready on http://localhost:${port}`)
);
