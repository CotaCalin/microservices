const express = require("express");
const Car = require("./models/cars_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "cars" });
});

app.get("/api/v1/cars", async (req, res) => {
  const cars = await Car.find({});
  res.json(cars);
});

app.post("/api/v1/cars", async (req, res) => {
  const car = new Car({ name: req.body.name, description: req.body.description, type: req.body.type });
  const savedCar = await car.save();
  res.json(savedCar);
});

app.delete("/api/v1/cars", async (req, res) => {
  await Car.deleteOne({"_id" : req.body._id}, function (err) {
    if (err) res.json(err)
    return
  });
  res.json(req.body);
});

app.put("/api/v1/cars", async (req, res) => {
  await Car.updateOne({"_id" : req.body._id},{name : req.body.name, description: req.body.description, type:req.body.type}, function (err) {
    if (err) res.json(err)
    return
  });
  res.json(req.body);
});
module.exports = app;
