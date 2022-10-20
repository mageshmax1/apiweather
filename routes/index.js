 const express = require('express');

const router = express.Router();

let weather_controller = require('../controller/weather');

router.post("/weather/add", weather_controller.addWeather);
router.get("/weather/get", weather_controller.getWeather);
router.get("/weather/filter/:city", weather_controller.filterCityWeather);
router.delete("/weather/delete/:id", weather_controller.deleteWeather);

module.exports = router;

