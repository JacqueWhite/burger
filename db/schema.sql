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

USE burgers_DB;

INSERT INTO burgers (burger_name, devoured)
VALUES ("mushroom burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("royale with cheese", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("bacon blue cheese burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("veggie burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("bison burger", false);