import express from "express";
import { createClient } from "redis";

const app = express();

const client = createClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submission", async (req, res) => {
  const { problemId, code, userId } = req.body;
  await client.lPush(
    "submissions",
    JSON.stringify({ problemId, code, userId })
  );
  res.json({
    message: "Submission received",
  });
});

(async () => {
  await client.connect();
  app.listen(3000);
})();
