const express = require("express");
const routes = require('./routes/index');

// Setup the express server
const app = express();
const port = 8080;
var cors = require('cors')

// Import middlewares into express
app.use(express.json({ limit: "100mb" }));
app.use(express.json());
app.use(cors())
// Import routes
// const masterController = require("./Controller/MasterController");
// Setup all the routes

// Middlewares
// app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});