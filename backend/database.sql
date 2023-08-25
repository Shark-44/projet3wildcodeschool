-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: alterworldbdd
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `alterworldbdd`
--

/*!40000 DROP DATABASE IF EXISTS `alterworldbdd`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `alterworldbdd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `alterworldbdd`;

--
-- Table structure for table `avis_objet`
--

DROP TABLE IF EXISTS `avis_objet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avis_objet` (
  `Utilisateur_id` int NOT NULL,
  `Objets_id` int NOT NULL,
  `avis_objet` varchar(500) DEFAULT NULL,
  `date_avis_objet` date DEFAULT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Objets_id`),
  KEY `fk_Utilisateur_has_Objets1_Objets1_idx` (`Objets_id`),
  KEY `fk_Utilisateur_has_Objets1_Utilisateur1_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Utilisateur_has_Objets1_Objets1` FOREIGN KEY (`Objets_id`) REFERENCES `objets` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Objets1_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis_objet`
--

LOCK TABLES `avis_objet` WRITE;
/*!40000 ALTER TABLE `avis_objet` DISABLE KEYS */;
INSERT INTO `avis_objet` VALUES (1,3,'Excellent, bien realisée','2023-07-17'),(1,8,'Super détails','2023-07-17'),(5,17,'Super rendu','2023-07-18'),(5,18,'Belle finition','2023-07-18'),(6,1,'J\'en ai prix 3 pour mes campagnes','2023-07-19'),(6,2,'Hate d\'explorer ces cartes superbes','2023-07-19'),(7,13,'J\'adore sincerement','2023-07-20'),(7,16,'Excellent belles finitions','2023-07-20'),(7,18,'Parfait super content de la qualité','2023-07-20'),(7,25,'Magnifique du plus bel effet','2023-07-20'),(8,3,'Rien a redire','2023-07-21'),(8,21,'Super realisation, de qualité','2023-07-21'),(8,23,'Franchement tres realiste','2023-07-21'),(8,30,'D\'une grande qualité','2023-07-21'),(8,32,'D\'une grande qualité','2023-07-21'),(8,34,'D\'une grande qualité','2023-07-21'),(9,11,'Tres satisfait de la qualité','2023-07-22'),(9,36,'Vraiment ravi de cette premiere experience','2023-07-22');
/*!40000 ALTER TABLE `avis_objet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avis_utilisateur`
--

DROP TABLE IF EXISTS `avis_utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avis_utilisateur` (
  `Utilisateur_id` int NOT NULL,
  `Utilisateur_id1` int NOT NULL,
  `avis_createur` varchar(255) DEFAULT NULL,
  `date_avis` date DEFAULT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Utilisateur_id1`),
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur2_idx` (`Utilisateur_id1`),
  KEY `fk_Utilisateur_has_Utilisateur_Utilisateur1_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Utilisateur_has_Utilisateur_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Utilisateur_Utilisateur2` FOREIGN KEY (`Utilisateur_id1`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis_utilisateur`
--

LOCK TABLES `avis_utilisateur` WRITE;
/*!40000 ALTER TABLE `avis_utilisateur` DISABLE KEYS */;
INSERT INTO `avis_utilisateur` VALUES (1,11,'Super dé envoyé rapidement','2023-07-17'),(1,12,'Magnifique je recommande ','2023-07-17'),(5,3,'Cape et chapeau envoyé rapidemnt vendeur genial','2023-07-18'),(6,2,'Ce createur a toute mon attention','2023-07-19'),(6,11,'Bravo l\'armurier!','2023-07-19'),(7,3,'Rien a redire, je recommande','2023-07-20'),(7,10,'super creatrice','2023-07-20'),(7,11,'Travail de quelité, merci','2023-07-20'),(8,2,'Vu le resultat je suis fan ','2023-07-21'),(8,3,'Belle imitation je suis ravie','2023-07-21'),(8,10,'Magnifique travail','2023-07-21'),(8,11,'Parfais expedié rapidement','2023-07-21'),(9,2,'Efficace je recommande','2023-07-22'),(9,12,'Envoyé rapidement ras','2023-07-22');
/*!40000 ALTER TABLE `avis_utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `categorie`
--

LOCK TABLES `categorie` WRITE;
/*!40000 ALTER TABLE `categorie` DISABLE KEYS */;
INSERT INTO `categorie` VALUES (1,'Graphisme'),(2,'Mode'),(3,'3DPrint');
/*!40000 ALTER TABLE `categorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorie_has_objets`
--

DROP TABLE IF EXISTS `categorie_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorie_has_objets` (
  `Categorie_id` int NOT NULL,
  `Objets_id` int NOT NULL,
  PRIMARY KEY (`Categorie_id`,`Objets_id`),
  KEY `fk_Categorie_has_Objets_Objets1_idx` (`Objets_id`),
  KEY `fk_Categorie_has_Objets_Categorie1_idx` (`Categorie_id`),
  CONSTRAINT `fk_Categorie_has_Objets_Categorie1` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`),
  CONSTRAINT `fk_Categorie_has_Objets_Objets1` FOREIGN KEY (`Objets_id`) REFERENCES `objets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorie_has_objets`
--

LOCK TABLES `categorie_has_objets` WRITE;
/*!40000 ALTER TABLE `categorie_has_objets` DISABLE KEYS */;
INSERT INTO `categorie_has_objets` VALUES (3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12),(3,13),(3,14),(2,15),(2,16),(2,17),(2,18),(2,19),(2,20),(2,21),(2,22),(2,23),(2,24),(2,25),(2,26),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,36),(1,37),(1,38),(1,39);
/*!40000 ALTER TABLE `categorie_has_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commande`
--

DROP TABLE IF EXISTS `commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commande` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` int(6) unsigned zerofill DEFAULT NULL,
  `Utilisateur_id` int NOT NULL,
  `prix_total` int DEFAULT NULL,
  PRIMARY KEY (`id`,`Utilisateur_id`),
  KEY `fk_Commande_Utilisateur1_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Commande_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commande`
--

LOCK TABLES `commande` WRITE;
/*!40000 ALTER TABLE `commande` DISABLE KEYS */;
INSERT INTO `commande` VALUES (1,000001,1,42),(2,000002,5,65),(3,000003,6,101),(4,000004,7,109),(5,000005,8,106),(6,000006,9,68);
/*!40000 ALTER TABLE `commande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commande_has_objets`
--

DROP TABLE IF EXISTS `commande_has_objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commande_has_objets` (
  `Commande_id` int NOT NULL AUTO_INCREMENT,
  `Objets_id` int NOT NULL,
  `quantite_commande` varchar(250) DEFAULT NULL,
  `date_commande` date DEFAULT NULL,
  PRIMARY KEY (`Commande_id`,`Objets_id`),
  KEY `fk_Commande_has_Objets_Objets1_idx` (`Objets_id`),
  KEY `fk_Commande_has_Objets_Commande1_idx` (`Commande_id`),
  CONSTRAINT `fk_Commande_has_Objets_Commande1` FOREIGN KEY (`Commande_id`) REFERENCES `commande` (`id`),
  CONSTRAINT `fk_Commande_has_Objets_Objets1` FOREIGN KEY (`Objets_id`) REFERENCES `objets` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commande_has_objets`
--

LOCK TABLES `commande_has_objets` WRITE;
/*!40000 ALTER TABLE `commande_has_objets` DISABLE KEYS */;
INSERT INTO `commande_has_objets` VALUES (1,3,'3','2023-07-17'),(1,8,'1','2023-07-17'),(2,17,'1','2023-07-18'),(2,18,'1','2023-07-18'),(3,1,'3','2023-07-19'),(3,33,'1','2023-07-19'),(3,35,'1','2023-07-19'),(4,13,'1','2023-07-20'),(4,16,'1','2023-07-20'),(4,18,'1','2023-07-20'),(4,25,'1','2023-07-20'),(5,3,'5','2023-07-21'),(5,21,'1','2023-07-21'),(5,23,'1','2023-07-21'),(5,30,'1','2023-07-21'),(5,32,'1','2023-07-21'),(5,34,'1','2023-07-21'),(6,11,'2','2023-07-22'),(6,36,'1','2023-07-22');
/*!40000 ALTER TABLE `commande_has_objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objets`
--

DROP TABLE IF EXISTS `objets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom_objet` varchar(250) DEFAULT NULL,
  `prix` int DEFAULT NULL,
  `quantité` int DEFAULT NULL,
  `photo_1` varchar(250) DEFAULT NULL,
  `photo_2` varchar(250) DEFAULT NULL,
  `description_objet` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objets`
--

LOCK TABLES `objets` WRITE;
/*!40000 ALTER TABLE `objets` DISABLE KEYS */;
INSERT INTO `objets` VALUES (1,'Armes',22,5,'/assets/images/print/armes.jpg','/assets/images/print/epee 2.png','Longueur 60 cm, composé en plusieurs élements et pret a peindre'),(2,'Cube',7,15,'/assets/images/print/cube.png','/assets/images/print/cube2.png','De 5cm de cote, pret a peindre composez votre decors'),(3,'Dé',3,8,'/assets/images/print/de.jpg','/assets/images/print/de 2.jpg','Demandez votre nombre de faces, vos couleurs et le reste sera du plaisirs de jouer'),(4,'Dé',3,10,'/assets/images/print/de 3.jpg','/assets/images/print/d4.jpg','Demandez votre nombre de faces, vos couleurs et le reste sera du plaisirs de jouer'),(5,'Gobelin',14,4,'/assets/images/print/gobelin.png','/assets/images/print/gobelin 2.png','Personnage de 10cm, pret a peindr. Cette figurine pourra donner du relief a vos parties'),(6,'Horde',13,5,'/assets/images/print/horde.jpg','/assets/images/print/perso 2 horde.jpg','Personnage de 10 cm pret a peindre. Demandez une figurine pour sublimer vos parties'),(7,'Loup',14,2,'/assets/images/print/perso loup.png','/assets/images/print/perso loup2.png','Loup de 10 cm pret a peindre. Comme ce loup imaginez vos figurines mettant en valeur vos parties'),(8,'Tour',33,3,'/assets/images/print/tour.jpg','/assets/images/print/tour 2.jpg','D\'une hauteur de 28 cm, pret a peindre, cette tour donnera l\'ambiance de votre jeu'),(9,'Tour',32,5,'/assets/images/print/tour de dé.png','/assets/images/print/tour 3.png','D\'une hauteur de 26 cm, pret a peindre, cette tour donnera l\'ambiance de votre jeu'),(10,'Tour',24,4,'/assets/images/print/tour 6.jpg','/assets/images/print/tour 7.jpg','Tour d\'une hauteur de 21 cm pret a peindre. Elle sera l\'élement phare a vos scenes'),(11,'Tour',25,5,'/assets/images/print/tour 8.jpg','/assets/images/print/tour 9.jpg','Tour de 24 cm pret a peindre, ajoutez des murs pour combler votre collection'),(12,'Mur',13,10,'/assets/images/print/mur.jpg','/assets/images/print/mur 2.jpg','Mur pret a peindre de 15 cm, completez votre collection'),(13,'Sceptre',27,3,'/assets/images/print/sceptre.png','/assets/images/print/sceptre2.png','Sceptre magique de 52cm, pret a peindre'),(14,'Livre',49,2,'/assets/images/print/livre.png','/assets/images/print/livre2.png','Ce livre sera capable de contenir vos grimoires etgarder vos secrets'),(15,'Bague',4,7,'/assets/images/mode/bague.png','/assets/images/mode/bague 2.png','Bague en résine vous affichera comme puissant et magique'),(16,'Chapeau',33,10,'/assets/images/mode/chapeau .png','/assets/images/mode/chapeau2.png','Chapeau en imitation cuir, Vous donnera un effet magique'),(17,'Chapeau',37,9,'/assets/images/mode/chapeau4.png','/assets/images/mode/chapeau3.png','Chapeau en feutre, devenez sorcier ou mage'),(18,'Cape',28,5,'/assets/images/mode/cape.jpg','/assets/images/mode/cape 2.jpg','Tel un  druide, cette cape sera faire de vous un personnage puissant'),(19,'Cape',31,4,'/assets/images/mode/cape 3.jpg','/assets/images/mode/cape 4.jpg','Tout magicien doit cacher ses secrets sous sa cape.'),(20,'Bourse',22,8,'/assets/images/mode/bourse.png','/assets/images/mode/bourse2.png','Cette bourse sera parfaite pour vos dés, jetons ou ecus...'),(21,'Saccoche',19,6,'/assets/images/mode/saccoche.png','/assets/images/mode/saccoche2.png','Saccoche en cuir fait main contiendra parfaitement vos ustensils de jeu'),(22,'Saccoche',18,5,'/assets/images/mode/saccoche3.png','/assets/images/mode/saccoche4.png','Saccoche en cuir fait main, Toujours a portée avec sa ceinture'),(23,'Tricorne',28,4,'/assets/images/mode/tricorne.png','/assets/images/mode/tricorne2.png','imitation cuir vous donnera un effet d\'aventure'),(24,'Oreilles ',17,3,'/assets/images/mode/oreille.png','/assets/images/mode/oreille2.png','Oreilles d\'Elfe en silicone. Demandez d\'autres modèles pour parfaire votre personnage'),(25,'Bague',21,5,'/assets/images/mode/bague3.png','/assets/images/mode/bague4.png','Bague un accessoire qui vous donnera le pouvoir.'),(26,'Bague',19,4,'/assets/images/mode/bague5.png','/assets/images/mode/bague6.png','Bague coeur de votre ame de joueur?'),(27,'Millenium',14,3,'/assets/images/map/millennium.jpg',NULL,'Plan sur rouleau adhesif, donnez vous un espace de jeu'),(28,'plan',13,5,'/assets/images/map/plan 1.jpg',NULL,'Nouvelle table de jeu sur cette ville'),(29,'plan',13,4,'/assets/images/map/plan2.jpg',NULL,' Partez dans ce monde inconnu'),(30,'plan',15,6,'/assets/images/map/plan3.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans lunivers fantastique'),(31,'plan',15,8,'/assets/images/map/plan4.jpg',NULL,'Trouvez le secret caché et evitez les pieges'),(32,'plan',14,5,'/assets/images/map/plan5.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans cette eglise mysterieuse'),(33,'plan',14,5,'/assets/images/map/plan6.jpg',NULL,'Trouvez le secret caché et evitez les pieges'),(34,'plan',15,6,'/assets/images/map/plan7.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans cette eglise mysterieuse'),(35,'plan',21,3,'/assets/images/map/plan8.jpg',NULL,'Explorez le monde Altrouille et n\'ayez peur.'),(36,'plan',13,5,'/assets/images/map/plan9.jpg',NULL,'Trouvez le secret caché et evitez les pieges'),(37,'plan',13,5,'/assets/images/map/plan10.jpg',NULL,'Trouvez le secret caché et evitez les pieges'),(38,'plan',13,5,'/assets/images/map/plan11.jpg',NULL,'Trouvez le secret caché et evitez les pieges'),(39,'plan',18,3,'/assets/images/map/plan12.png',NULL,'Imaginez ce que revele ces ruelles');
/*!40000 ALTER TABLE `objets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `Utilisateur_id` int NOT NULL,
  `Objets_id` int NOT NULL,
  `quantité_panier` int DEFAULT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Objets_id`),
  KEY `fk_Utilisateur_has_Objets1_Objets2_idx` (`Objets_id`),
  KEY `fk_Utilisateur_has_Objets1_Utilisateur2_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Utilisateur_has_Objets1_Objets2` FOREIGN KEY (`Objets_id`) REFERENCES `objets` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Objets1_Utilisateur2` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

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
  `password` varchar(50) DEFAULT NULL,
  `adresse` varchar(250) DEFAULT NULL,
  `createur` tinyint DEFAULT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `description_createur` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Extraterrestre','Casimir','casimir@aol.fr','1234','Ile aux enfants',0,'/assets/images/avatar/Casimir.jpg',NULL),(2,'Gribouille','pierre','p.gribouille@aol.fr','1234','58 boulevard des artistes 75000 Paris',1,'/assets/images/avatar/Pierre.png','Depuis de nombreuse années je fais des illustrations et je mets ma passion a votre service'),(3,'Crewe','Sarah','S.crewe@aol.fr','1234',' 12 des jardins 75000 Paris',1,'/assets/images/avatar/Sarah.jpg','Ancienne costumiere de theatre j\'ai tout changé pour un plaisir des jeux'),(4,'Curtis','Flam','capitainflam@aol.fr','1234','place du jardin 75000Paris',1,'/assets/images/avatar/Flam.jpg','Fan d\'aventure et de jeu de role j\'ai du vous ressortir mes vielles cartes non explorées'),(5,'Aux fraises','Charlotte','charlottes@aol.fr','1234','pays magique',0,'/assets/images/avatar/Charlotte.jpg',NULL),(6,'Larson','Nicky','h.montmirail@aol.fr','1234','city hunter 75000 Paris',0,'/assets/images/avatar/Nicky.jpg',NULL),(7,'Sawyer','Tom','t.sawyer@aol.fr','1234','bord du mississipi',0,'/assets/images/avatar/Tom.jpg',NULL),(8,'Neige','Candy','n.candy@aol.fr','1234','1 impasse de la tristesse 75000 Paris',0,'/assets/images/avatar/Candy.jpg',NULL),(9,'d\'Euphore','Actarus','Actarus.Euphore@aol.fr','1234','7 route du centre 75000 Paris',0,'/assets/images/avatar/Actarus.jpg',NULL),(10,'Alpe','Heidi','A.Heidi@aol','1234','le chalet des Alpes',1,'/assets/images/avatar/Heidi.jpg','Dans mes montagnes j\'ai du tres tot apprendre toute sorte de choses et mes petites mains sont magiques'),(11,'Corsaire','Albator','Albator.corsaire@aol.fr','1234','Atlantis',1,'/assets/images/avatar/Albator.jpg','Ma passion pour l\'aventure et les objets 3D aggrandiira votre experience'),(12,'Pirate','Cobra','cobra@aol.fr','1234','Ici et la',1,'/assets/images/avatar/Cobra.jpg','De mes voyages je vous ramene cette experience de la 3D');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur_has_categorie`
--

DROP TABLE IF EXISTS `utilisateur_has_categorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur_has_categorie` (
  `Utilisateur_id` int NOT NULL,
  `Categorie_id` int NOT NULL,
  PRIMARY KEY (`Utilisateur_id`,`Categorie_id`),
  KEY `fk_Utilisateur_has_Categorie_Categorie1_idx` (`Categorie_id`),
  KEY `fk_Utilisateur_has_Categorie_Utilisateur1_idx` (`Utilisateur_id`),
  CONSTRAINT `fk_Utilisateur_has_Categorie_Categorie1` FOREIGN KEY (`Categorie_id`) REFERENCES `categorie` (`id`),
  CONSTRAINT `fk_Utilisateur_has_Categorie_Utilisateur1` FOREIGN KEY (`Utilisateur_id`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur_has_categorie`
--

LOCK TABLES `utilisateur_has_categorie` WRITE;
/*!40000 ALTER TABLE `utilisateur_has_categorie` DISABLE KEYS */;
INSERT INTO `utilisateur_has_categorie` VALUES (2,1),(4,1),(3,2),(10,2),(11,3),(12,3);
/*!40000 ALTER TABLE `utilisateur_has_categorie` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `utilisateur_has_objets`
--

LOCK TABLES `utilisateur_has_objets` WRITE;
/*!40000 ALTER TABLE `utilisateur_has_objets` DISABLE KEYS */;
INSERT INTO `utilisateur_has_objets` VALUES (11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),(12,8),(12,9),(12,10),(12,11),(12,12),(11,13),(12,14),(3,15),(3,16),(3,17),(3,18),(3,19),(10,20),(10,21),(10,22),(3,23),(10,24),(10,25),(10,26),(2,27),(4,28),(4,29),(2,30),(4,31),(2,32),(4,33),(2,34),(2,35),(4,36),(4,37),(4,38),(2,39);
/*!40000 ALTER TABLE `utilisateur_has_objets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-24 16:39:45
