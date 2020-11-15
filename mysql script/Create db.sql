
CREATE TABLE `rental`.`property` (
  `Property_Id` INT NOT NULL AUTO_INCREMENT COMMENT 'Primary key',
  `Location` VARCHAR(500) NOT NULL,
  `Type` VARCHAR(6) NOT NULL DEFAULT '1b1b',
  `Price` DECIMAL(5,2) NOT NULL,
  `Origin` VARCHAR(50) NOT NULL COMMENT '\'Source website\'',
  `Available_Date` DATETIME NOT NULL,
  `Reference` VARCHAR(500) NOT NULL COMMENT 'Reference address in file repository ”src/property-imgs/property.jpg”',
  PRIMARY KEY (`Property_Id`));
  
  CREATE TABLE `rental`.`rental_process` (
  `RP_Id` INT NOT NULL AUTO_INCREMENT,
  `Rental_Process` VARCHAR(50) NOT NULL COMMENT '“Property Searching\"',
  PRIMARY KEY (`RP_Id`));
  
  CREATE TABLE `rental`.`source` (
  `Source_Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NOT NULL COMMENT '“Real estate”',
  `Link` VARCHAR(2038) NOT NULL COMMENT 'Url: “https://www.realestate.com.au/buy”',
  PRIMARY KEY (`Source_Id`));

CREATE TABLE `rental`.`guideline` (
  `Guideline_Id` INT NOT NULL AUTO_INCREMENT,
  `RP_Id` INT NOT NULL,
  `Source_Id` INT NOT NULL,
  `Current_Star` DECIMAL(2,1) NOT NULL DEFAULT 2.5 COMMENT 'Default: 2.5, range (0-5)',
  `Num_Submission` INT NOT NULL DEFAULT 0 COMMENT 'Number of customers who have submitted a rating',
  `Title` VARCHAR(100) NOT NULL,
  `Content` LONGTEXT NOT NULL,
  PRIMARY KEY (`Guideline_Id`),
  INDEX `RP_Id_idx` (`RP_Id` ASC) VISIBLE,
  INDEX `Source_Id_idx` (`Source_Id` ASC) VISIBLE,
  CONSTRAINT `RP_Id`
    FOREIGN KEY (`RP_Id`)
    REFERENCES `rental`.`rental_process` (`RP_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Source_Id`
    FOREIGN KEY (`Source_Id`)
    REFERENCES `rental`.`source` (`Source_Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE property
MODIFY COLUMN Available_Date VARCHAR(50);

ALTER TABLE property
MODIFY COLUMN Price VARCHAR(20);

ALTER TABLE property
CHANGE Prop_type Property_type VARCHAR(30) NOT NULL DEFAULT '1Bed 1Bath';

ALTER TABLE property
CHANGE Reference Img_reference VARCHAR(500) NOT NULL COMMENT 'Reference address in file repository ”src/property-imgs/property.jpg”';
