DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
