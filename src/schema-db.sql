-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema impacta-curso-react-api
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema impacta-curso-react-api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `impacta-curso-react-api` ;
USE `impacta-curso-react-api` ;

-- -----------------------------------------------------
-- Table `impacta-curso-react-api`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impacta-curso-react-api`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `update_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `impacta-curso-react-api`.`Vehicle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `impacta-curso-react-api`.`Vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` INT UNSIGNED NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `update_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Vehicle_User_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `fk_Vehicle_User`
    FOREIGN KEY (`user`)
    REFERENCES `impacta-curso-react-api`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
