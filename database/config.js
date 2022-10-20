const express = require("express");
var mysql = require("mysql");


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