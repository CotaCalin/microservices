const fetch = require("node-fetch");
const express = require("express");

const Car = require("./models/cars_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});


app.get("/api/v1/search", async (req, res) => {
  const carsPromise = Car.find({});
  const cars = await carsPromise;
  res.json(cars);
});

app.post("/api/v1/search", async (req, res) => {
  const carsPromise = Car.find({ name: { "$regex": req.body.name, "$options": "i" }});
  const cars = await carsPromise;
  console.log(cars)
  res.json(cars);
});

module.exports = app;
