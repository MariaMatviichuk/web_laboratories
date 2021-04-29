CREATE DATABASE IF NOT EXISTS history;

USE history;

CREATE TABLE IF NOT EXISTS history
(
    id INT,
    master VARCHAR(20),
    state VARCHAR(20),
    cpuusage INT,
    config INT,
    configdate DATETIME
);

