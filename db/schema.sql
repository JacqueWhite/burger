DROP DATABASE IF EXISTS burgers_DB;
CREATE database burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
  'id' INT(11) AUTO_INCREMENT NOT NULL,
  'burger_name' VARCHAR(100) NULL,
  'devoured' BOOLEAN DEFAULT false,
  'time' TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
