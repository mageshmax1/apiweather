 const express = require('express');
// // const routes = express();
//  const router = Router();
//  var Router       = require('router')


// import { Router } from "express";
// import { methods as weather_controller } from "../controller/weather";

const router = express.Router();

//controller :""
let weather_controller = require('../controller/weather');


router.post("/weather/add", weather_controller.addWeather);
router.get("/weather/get", weather_controller.getWeather);
router.delete("/weather/delete/:id", weather_controller.deleteWeather);

module.exports = router;

//   export default router;