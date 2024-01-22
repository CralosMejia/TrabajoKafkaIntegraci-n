USE sys;

Drop database if exists TallerGarantiaEntrega;
CREATE DATABASE TallerGarantiaEntrega;

USE TallerGarantiaEntrega;

CREATE TABLE IF NOT EXISTS `mensajes_enviados` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `topic` VARCHAR(255) NOT NULL,
  `mensaje` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL
);

select * from mensajes_enviados
