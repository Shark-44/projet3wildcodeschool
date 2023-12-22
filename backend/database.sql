CREATE DATABASE  IF NOT EXISTS `alterworldbdd-2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `alterworldbdd-2`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: alterworldbdd-2
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avis_objet`
--

DROP TABLE IF EXISTS `avis_objet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avis_objet` (
  `id_avisobjet` int NOT NULL AUTO_INCREMENT,
  `avisObjet` varchar(45) NOT NULL,
  `date_avis` date NOT NULL,
  `utilisateur_id` int NOT NULL,
  PRIMARY KEY (`id_avisobjet`),
  KEY `fk_avis_objet_utilisateur2_idx` (`utilisateur_id`),
  CONSTRAINT `fk_avis_objet_utilisateur2` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `avis_objet_has_objets`
--

DROP TABLE IF EXISTS `avis_objet_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avis_objet_has_objets` (
  `avis_objet_id_avisobjet` int NOT NULL,
  `objets_id` int NOT NULL,
  PRIMARY KEY (`avis_objet_id_avisobjet`,`objets_id`),
  KEY `fk_avis_objet_has_objets_objets1_idx` (`objets_id`),
  KEY `fk_avis_objet_has_objets_avis_objet1_idx` (`avis_objet_id_avisobjet`),
  CONSTRAINT `fk_avis_objet_has_objets_avis_objet1` FOREIGN KEY (`avis_objet_id_avisobjet`) REFERENCES `avis_objet` (`id_avisobjet`),
  CONSTRAINT `fk_avis_objet_has_objets_objets1` FOREIGN KEY (`objets_id`) REFERENCES `objets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `avis_utilisateur`
--

DROP TABLE IF EXISTS `avis_utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avis_utilisateur` (
  `Utilisateur_id` int NOT NULL,
  `Utilisateur_id1` int NOT NULL,
  `aviscreateur` varchar(255) DEFAULT NULL,
  `dateaviscreateur` date DEFAULT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Utilisateur_id1`),
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur2_idx` (`Utilisateur_id1`),
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur1_idx` (`Utilisateur_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_Utilisateur_has_Utilisateur_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Utilisateur_Utilisateur2` FOREIGN KEY (`Utilisateur_id1`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `commande`
--

DROP TABLE IF EXISTS `commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commande` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` int unsigned DEFAULT NULL,
  `prixTotal` int DEFAULT NULL,
  `utilisateur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_commande_utilisateur1_idx` (`utilisateur_id`),
  CONSTRAINT `fk_commande_utilisateur1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `commandehasobjets`
--

DROP TABLE IF EXISTS `commandehasobjets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commandehasobjets` (
  `CommandeId` int NOT NULL AUTO_INCREMENT,
  `ObjetsId` int NOT NULL,
  `quantiteCommande` varchar(250) DEFAULT NULL,
  `dateCommande` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CommandeId`,`ObjetsId`),
  KEY `fk_Commande_has_Objets_Objets1_idx` (`ObjetsId`),
  KEY `fk_Commande_has_Objets_Commande1_idx` (`CommandeId`),
  CONSTRAINT `fk_Commande_has_Objets_Commande1` FOREIGN KEY (`CommandeId`) REFERENCES `commande` (`id`),
  CONSTRAINT `fk_Commande_has_Objets_Objets1` FOREIGN KEY (`ObjetsId`) REFERENCES `objets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `favoris`
--

DROP TABLE IF EXISTS `favoris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoris` (
  `favoris` int DEFAULT NULL,
  `Utilisateur_id` int NOT NULL,
  `Utilisateur_id1` int NOT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Utilisateur_id1`),
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur2_idx` (`Utilisateur_id1`) /*!80000 INVISIBLE */,
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur1_idx` (`Utilisateur_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `objets`
--

DROP TABLE IF EXISTS `objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomObjet` varchar(250) DEFAULT NULL,
  `prix` int DEFAULT NULL,
  `quantite` int DEFAULT NULL,
  `photo1` varchar(250) DEFAULT NULL,
  `photo2` varchar(250) DEFAULT NULL,
  `descriptionObjet` varchar(250) DEFAULT NULL,
  `categorie_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_objets_categorie1_idx` (`categorie_id`),
  CONSTRAINT `fk_objets_categorie1` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantite_panier` int DEFAULT NULL,
  `utilisateur_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_panier_utilisateur1_idx` (`utilisateur_id`),
  CONSTRAINT `fk_panier_utilisateur1` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `panier_has_objets`
--

DROP TABLE IF EXISTS `panier_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier_has_objets` (
  `objets_id` int NOT NULL,
  `panier_id` int NOT NULL,
  PRIMARY KEY (`objets_id`,`panier_id`),
  KEY `fk_panier_has_objets_objets1_idx` (`objets_id`),
  KEY `fk_panier_has_objets_panier1_idx` (`panier_id`),
  CONSTRAINT `fk_panier_has_objets_objets1` FOREIGN KEY (`objets_id`) REFERENCES `objets` (`id`),
  CONSTRAINT `fk_panier_has_objets_panier1` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `adresse` varchar(250) DEFAULT NULL,
  `codePostal` int DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `createur` tinyint DEFAULT '0',
  `photo` varchar(250) DEFAULT NULL,
  `descriptionCreateur` varchar(255) DEFAULT NULL,
  `categorie_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_utilisateur_categorie1_idx` (`categorie_id`),
  CONSTRAINT `fk_utilisateur_categorie1` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `utilisateur_has_objets`
--

DROP TABLE IF EXISTS `utilisateur_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur_has_objets` (
  `Utilisateur_id` int NOT NULL,
  `Objets_id` int NOT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Objets_id`),
  KEY `fk_Utilisateur_has_Objets_Objets1_idx` (`Objets_id`),
  KEY `fk_Utilisateur_has_Objets_Utilisateur1_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Utilisateur_has_Objets_Objets1` FOREIGN KEY (`Objets_id`) REFERENCES `objets` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Objets_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'alterworldbdd-2'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-22  9:47:02
