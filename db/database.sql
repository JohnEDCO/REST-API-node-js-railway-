CREATE DATABASE IF NOT EXISTS companydb;


USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'John', 5000),
    (2, 'Kiko', 1000),
    (3, 'Chili', 2000),
    (4, 'Axel', 200);