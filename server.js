import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
dotenv.config();

const app = express();
const PORT = 8081;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from Codex Server",
  });
});


app.post("/", async (req, res) => {
  const data = req.body;

  res.status(200).send({
    success: true,
    message: "server is running fine !!",
    data,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
