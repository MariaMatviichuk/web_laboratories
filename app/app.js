'use strict';

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "db",
    user: "mysql",
    password: "1234567890",
    database: "history"
}).promise();

app.post("/history", urlencodedParser, function (req, res) {
    if (!req.headers.id) return res.sendStatus(400);
    const id = req.headers.id;
    const master = req.headers.master;
    const state = req.headers.state;
    const cpuusage = req.headers.cpuusage;
    const config = req.headers.config;
    const configdate = req.headers.configdate;
    pool.query("INSERT INTO history (id, master, state, cpuusage, config, configdate) VALUES (?,?,?,?,?,?)", [id, master, state, cpuusage, config, configdate])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            res.send(err);
        });
});

app.get("/history", function (req, res) {
    pool.query("SELECT * FROM history;")
        .then(([rows, fields]) => {
            res.send(rows);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get("/history/:id", function (req, res) {
    const id = Number(req.params["id"]);
    pool.query("SELECT * FROM history WHERE id=(?);", [id])
        .then(result => {
            res.send(result[0]);
        })
        .catch(err => {
            res.send(err);
        })
});

app.listen(3000, function () {
    console.log("Server waiting connection...");
});