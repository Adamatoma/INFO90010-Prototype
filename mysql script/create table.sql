-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: rental
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `guideline`
--

DROP TABLE IF EXISTS `guideline`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `guideline` (
  `Guideline_Id` int(11) NOT NULL AUTO_INCREMENT,
  `RP_Id` int(11) NOT NULL,
  `Current_Star` decimal(2,1) NOT NULL DEFAULT '2.5' COMMENT 'Default: 2.5, range (0-5)',
  `Num_Submission` int(11) NOT NULL DEFAULT '0' COMMENT 'Number of customers who have submitted a rating',
  `Title` varchar(100) NOT NULL,
  `Content` longtext NOT NULL,
  `Source_Name` varchar(50) NOT NULL,
  `Source_Link` varchar(2038) NOT NULL,
  PRIMARY KEY (`Guideline_Id`),
  KEY `RP_Id_idx` (`RP_Id`),
  CONSTRAINT `RP_Id` FOREIGN KEY (`RP_Id`) REFERENCES `rental_process` (`RP_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guideline`
--

LOCK TABLES `guideline` WRITE;
/*!40000 ALTER TABLE `guideline` DISABLE KEYS */;
INSERT INTO `guideline` VALUES (1,10,3.8,0,'What is a residential tenancy agreement?','A residential tenancy agreement is a legal binding written contract between you, as a tenant or resident and a property landlord, is also commonly called a lease.  This document should be given to the tenant before paying any money or being committed to the tenancy.  Make sure you read it carefully and ask any questions.\n\nWhat goes into the Tenancy Agreement?\nthe name and address of the tenant, and the property manager/owner or provider\nthe dates when the agreement starts and ends (or state that the agreement is periodic)\ndetails about how the tenant should pay the rent and how much rent is to be paid\ndetails about what the tenant and the property manager/owner or provider can and cannot do, known as \'standard terms\'\nany special terms (these should be agreed in advance, e.g. that dogs are allowed but must be kept outside or carpet cleaning)\nThe length and type of tenancy - either a fixed term agreement where the tenant agrees to rent the property for a fixed term such as 6,9,12 months or a periodic agreement when a tenant / resident lives there for an indefinite period\nThe amount of bond required\nOther conditions and rules.','HJ Hooker Real Estate','https://www.ljhooker.com.au/rent/first-time-renters-guide'),(2,10,2.5,0,'New tenant checklist?','At the start of every tenancy, the landlord or agent must give you:\n\na copy of our guide, Renting a home: a guide for tenants (PDF, 2.7MB) or Renting a home: a guide for tenants (Word, 348KB).\nFrom 19 June 2019, the guide can be in electronic form if you have agreed in writing to receive notices and other documents electronically. Otherwise, the landlord or agent must give you a printed copy\na phone number you can use to contact the landlord or agent out of business hours for urgent repairs\nthe landlord’s or agent’s full name, a postal address for sending them documents, and an email address (if they agreed in writing to receive notices and other documents electronically)\nkeys to all the locks in your new home.\nIf applicable, they must also give you:\n\na copy of your lease (tenancy agreement) within 14 days of you signing it (if your agreement is in writing)\ntwo copies of the premises condition report (if you paid a bond)\na bond lodgement form for you to sign (if you paid a bond), so the bond money can be lodged with the Residential Tenancies Bond Authority\ndetails of whether the agent can authorise urgent repairs, and the maximum amount they can authorise (if an agent manages the property)\na copy of the owners corporation rules (if the property is in an owners corporation).','Victoria State Government','https://www.consumer.vic.gov.au/housing/renting/beginning-a-lease-or-residency/new-tenant-checklist'),(3,14,2.5,0,'Ending an agreement early (breaking a lease)','If a tenant or property manager/owner ends a fixed term agreement before the end date without grounds (i.e. without sufficient reason) they are breaking the agreement. This is also known as breaking the lease.A tenancy agreement is a legally binding agreement. If it is broken, compensation will probably need to be paid.Money may be owed to the property manager/owner as a result of breaking the lease. This is considered compensation.Example: the loss of rent until the property is re-let or until the end of the tenancy agreement.The tenant may also have to pay reasonable re-letting and advertising costs.Any compensation, or payment options for the amount, should be discussed between the tenant and the property manager/owner (this could include how the bond is to be paid out).The property manager/owner must mitigate any loss associated with breaking the lease.If the tenant or property manager/owner is experiencing excessive hardship (e.g. serious financial or health issues) they may make an urgent application to QCAT for an order terminating the agreement. However, QCAT may also order compensation to be paid even if the agreement is terminated.Please note that we cannot respond to any comments made here. If you need a response, please contact usPhone number (within Australia)  1300 366 311Phone number (international)  +61 7 3046 5400 (international)Location address  Level 23, 179 Turbot Street\nBrisbane Q 4001Social media   LinkedIn     YouTubeContact us  © The State of Queensland Residential Tenancies Authority','Queensland Government','https://www.rta.qld.gov.au/renting/ending-a-tenancy/ending-a-tenancy-agreement/ending-an-agreement-early-breaking-a-lease'),(4,1,2.5,0,'How much rent is too much to pay?','Whether we’re looking to buy or rent when on the hunt for a new home, it’s easy to get caught up in the moment.You find your dream home, and you’re more than willing to move the budget goal posts in order to make it yours.When buying a home, having home loan pre-approval helps keep things in check – if you overcommit to a purchase, chances are the bank will reject your mortgage application.But how much is too much when it comes to paying rent?“Generally, spending more than 30 per cent of your income on rent is considered too much and can lead to rental stress,” Finder insights manager Graham Cooke says.“A good framework to use is the 50/30/20 budgeting rule. This suggests you spend 50 per cent of your income on essentials like rent, groceries and bills, 30 per cent on non-essential items like streaming subscriptions, eating out and other luxuries, and 20 per cent you should put into savings.“When determining how much you’re willing to pay for rent, you’ll need to consider your personal circumstances as well as the current state of the market.”While it’s a good idea to try to stay within that 30 per cent figure, factors such as location, property type and size will also play a role in determining the value of the property.“Research similar properties in the area to get an idea of what you might be paying before you start attending open homes,” Mr Cooke says.“You don’t want to fall in love with a suburb and realise it’s way outside your budget.”Australian Housing Initiative founder Ian Ugarte says demand for rentals is often driven by an inability to afford to buy in an area.“Unfortunately, this can drive up prices in an area, as it can result in higher rental prices due to a lessening of supply of available rentals in that area,” he says.“In turn, if property owners are able to command a good rental return in an area, the value of the property increases due to the high rental yield/demand to live in the area.”Mr Ugarte says a simple way to assess how much is too much when it comes to calculating rent, is to consider how much it would cost to service a loan in the same area.In short, if it’s cheaper to service the mortgage than pay rent on the same property then you know you’re paying too much rent.Of course, priorities also come into play when determining how much you’re willing to pay to rent a property.“Some people may be happy to spend more on rent in order to reduce their commute time, or to get a place with an extra bedroom for instance, and just cut back in other areas to make it work,” Compass Housing Services manager of research and public affairs Martin Kennedy says.But for the average income earner, spending more than 30 per cent of your income on rent is considered a sign of rental stress.“People who are in rental stress inevitably have to cut back on spending in other areas,” Mr Kennedy says.“In serious cases, this can mean people are forced to choose between paying the rent and other necessities like utilities and groceries.“If housing stress becomes widespread, as it has in Australia, it doesn’t just impact the quality of life of the individuals themselves, it acts as a drag on the rest of the economy because people in housing stress will obviously spend less on discretionary items.”For those on higher incomes, spending more than 30 per cent of their income on rent won’t necessarily lead to rental stress, but that doesn’t mean it’s a good idea.“By paying too much for your rent, you’re throwing away money that could be going towards getting you on the property ladder,” Mr Cooke says.If the horse has already bolted and you think you’re currently paying too much rent, Mr Cooke says it’s worth asking your landlord for a reduction – but be realistic about what you’re asking for.“Use other properties as a benchmark,” he says.“If you can show that your rent is higher than that of similar properties in your area, your landlord is more likely to be sympathetic.”But realism needs to work both ways, according to Mr Cooke, who says with the rental market now seeing record vacancy volumes, and some landlords struggling to fill their properties due to the COVID-19 crisis, renters should be careful of signing a short-term lease which may increase significantly after six months.“Look to get a 12-month price guarantee at the very least, and possibly some written confirmation from the landlord that the rent can only increase by a certain percentage per year after that.“It’s a renter’s market right now – so use that extra leverage to gain some value.”','domain.com','https://www.domain.com.au/advice/how-much-rent-is-too-much-977190/');
/*!40000 ALTER TABLE `guideline` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `property`
--

DROP TABLE IF EXISTS `property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `property` (
  `Property_Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary key',
  `Location` varchar(500) NOT NULL,
  `Type` varchar(6) NOT NULL DEFAULT '1b1b',
  `Price` decimal(5,2) NOT NULL,
  `Origin` varchar(50) NOT NULL COMMENT '''Source website''',
  `Available_Date` datetime NOT NULL,
  `Reference` varchar(500) NOT NULL COMMENT 'Reference address in file repository ”src/property-imgs/property.jpg”',
  PRIMARY KEY (`Property_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `property`
--

LOCK TABLES `property` WRITE;
/*!40000 ALTER TABLE `property` DISABLE KEYS */;
INSERT INTO `property` VALUES (1,'5507/462 Elizabeth St Melbourne VIC 3000','2b1b0p',480.00,'Domain','2020-10-25 00:00:00','5507/462 Elizabeth St Melbourne VIC 3000 domain.jpg'),(2,'5507/462 Elizabeth St Melbourne VIC 3000','2b1b0p',480.00,'Real Estate','2020-10-25 00:00:00','5507/462 Elizabeth St Melbourne VIC 3000 realestate.jpg'),(3,'4301/483 Swanston Street Melbourne VIC 3000','3b2b0p',750.00,'Domain','2020-10-25 00:00:00','4301/483 Swanston Street Melbourne VIC 3000 domain.jpg'),(4,'4301/483 Swanston Street Melbourne VIC 3000','3b2b0p',750.00,'Domain','2020-10-25 00:00:00','4301/483 Swanston Street Melbourne VIC 3000 realestate.jpg');
/*!40000 ALTER TABLE `property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_process`
--

DROP TABLE IF EXISTS `rental_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rental_process` (
  `RP_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Rental_Process` varchar(50) NOT NULL COMMENT '“Property Searching"',
  PRIMARY KEY (`RP_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_process`
--

LOCK TABLES `rental_process` WRITE;
/*!40000 ALTER TABLE `rental_process` DISABLE KEYS */;
INSERT INTO `rental_process` VALUES (1,'Rental market overview'),(2,'Tenant rights'),(3,'Rental process'),(4,'Local lingo'),(5,'Location'),(6,'Start searching'),(7,'Contact agency'),(8,'Inspection'),(9,'Application'),(10,'Sign the lease'),(11,'Documents'),(12,'Move in'),(13,'Communication'),(14,'Lease break'),(15,'Lease transfer');
/*!40000 ALTER TABLE `rental_process` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `source`
--

DROP TABLE IF EXISTS `source`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `source` (
  `Source_Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL COMMENT '“Real estate”',
  `Link` varchar(2038) NOT NULL COMMENT 'Url: “https://www.realestate.com.au/buy”',
  PRIMARY KEY (`Source_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `source`
--

LOCK TABLES `source` WRITE;
/*!40000 ALTER TABLE `source` DISABLE KEYS */;
INSERT INTO `source` VALUES (1,'HJ Hooker Real Estate','https://www.ljhooker.com.au/rent/first-time-renters-guide'),(2,'Victoria State Government','https://www.consumer.vic.gov.au/housing/renting/beginning-a-lease-or-residency/new-tenant-checklist');
/*!40000 ALTER TABLE `source` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-25 12:45:07
