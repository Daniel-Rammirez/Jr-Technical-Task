const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const CryptoModel = require("./models/Crypto");

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5175",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { symbol, slug, max_supply, cmc_rank, quote } = req.body;
  try {
    const cryptoDoc = await CryptoModel.create({
      symbol,
      slug,
      max_supply,
      cmc_rank,
      quote,
    });
    res.json(cryptoDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.get("/datos", async (req, res) => {
  const data = await CryptoModel.find();
  res.json(data);
});

app.post("/remove", async (req, res) => {
  const { symbol, slug, max_supply, cmc_rank, quote } = req.body;
  const data = await CryptoModel.deleteOne({ cmc_rank: cmc_rank });
  res.json(data);
});

app.listen(4002);
