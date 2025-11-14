import cors from "cors";
import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ hello: "world" }).status(200);
});

app.listen(PORT, () => console.log("🚀Server is running on port: ", PORT));
