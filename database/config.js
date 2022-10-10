const express = require("express");
// const bodyparser = require("body-parser");
var mysql = require("mysql");

// var app = express();
// app.use(bodyparser.json());

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "weather",
    debug: false
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
    // connection
};