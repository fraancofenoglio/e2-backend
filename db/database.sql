CREATE DATABASE IF NOT EXISTS gastosDB;

USE gastosDB;

CREATE TABLE gastos (
    id INT(11) NOT NULL AUTO_INCREMENT,
    descripcion VARCHAR(45) DEFAULT NULL,
    gasto INT(10) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE gastos;

INSERT INTO gastos VALUES
  (1, "Comida", 1000),
  (2, "Alimento perro", 2000);
