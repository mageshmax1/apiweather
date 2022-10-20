const express = require("express");
const CircularJSON = require("circular-json");
var stringify = require("json-stringify-safe");

const db = require("../database/config");
let router = express.Router();

const addWeather = async (req, res) => {
  try {
    const { city, temperature, created_at,deleted_at } = req.body;

    if (city === undefined || temperature === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    }

    const weather = { city, temperature, created_at, deleted_at };
    let createDate = new Date();
    weather.created_at = createDate;
    weather.deleted_at = createDate;
    const connection = await db.getConnection();
    await connection.query("INSERT INTO weathers SET ?", weather);
    res.json({ message: "weather added" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getWeather = async (req, res) => {
  try {
    const connection = await db.getConnection();
    const result = await connection.query(
      "SELECT * FROM weathers",
      (err, rows, fields) => {
        if (!err) res.send(rows);

      }
    );
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
const filterCityWeather = async (req, res) => {
  try {
    const connection = await db.getConnection();
    const { city } = req.params;
    const result = await connection.query(
      "SELECT id,city,temperature,created_at,deleted_at FROM weathers WHERE city= ?",city,
      (err, rows, fields) => {
        if (!err) res.send(rows[0]);

      }
    ); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


const deleteWeather = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await db.getConnection();
        const result = await connection.query("DELETE FROM weathers WHERE id = ?", id,(err, rows, fields) => {
            if (!err) res.send(rows);
    
          });
        // res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



// "DELETE FROM `weathers` WHERE `weathers`.`id` = 2"?
module.exports = {
  addWeather,
  getWeather,
  deleteWeather,
  filterCityWeather,
};
