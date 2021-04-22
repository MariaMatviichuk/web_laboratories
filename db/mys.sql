CREATE DATABASE IF NOT EXISTS botconfig;

USE botconfig;

CREATE TABLE IF NOT EXISTS botsconf
(
    id INT,
    state VARCHAR(20),
    cpuusage INT,
    data DATETIME
);

insert into botsconf value (193, 'work', 10, '2021-04-12 12:00:22');