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
-- Dumping data for table `avis_objet`
--

LOCK TABLES `avis_objet` WRITE;
/*!40000 ALTER TABLE `avis_objet` DISABLE KEYS */;
INSERT INTO `avis_objet` VALUES (1,'Excellent, bien realisée','2023-07-17',1),(2,'Super détails','2023-07-17',1),(3,'Super rendu','2023-07-18',5),(4,'Belle finition','2023-07-18',5),(5,'J\'en ai prix 3 pour mes campagnes','2023-07-19',6),(6,'Hate d\'explorer ces cartes superbes','2023-07-19',6),(7,'J\'adore sincerement','2023-07-20',7),(8,'Excellent belles finitions','2023-07-20',7),(9,'Parfait super content de la qualité','2023-07-20',7),(10,'Magnifique du plus bel effet','2023-07-20',7),(11,'Rien a redire','2023-07-21',8),(12,'Super realisation, de qualité','2023-07-21',8),(13,'Franchement tres realiste','2023-07-21',8),(14,'D\'une grande qualité','2023-07-21',8),(15,'D\'une grande qualité','2023-07-21',8),(16,'D\'une grande qualité','2023-07-21',8),(17,'Tres satisfait de la qualité','2023-07-22',9),(18,'Vraiment ravi de cette premiere experience','2023-07-22',9);
/*!40000 ALTER TABLE `avis_objet` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `avis_objet_has_objets`
--

LOCK TABLES `avis_objet_has_objets` WRITE;
/*!40000 ALTER TABLE `avis_objet_has_objets` DISABLE KEYS */;
INSERT INTO `avis_objet_has_objets` VALUES (5,1),(6,2),(1,3),(11,3),(2,8),(17,11),(7,13),(8,16),(3,17),(4,18),(9,18),(12,21),(13,23),(10,25),(14,30),(15,32),(16,34),(18,36);
/*!40000 ALTER TABLE `avis_objet_has_objets` ENABLE KEYS */;
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
-- Dumping data for table `commande`
--

LOCK TABLES `commande` WRITE;
/*!40000 ALTER TABLE `commande` DISABLE KEYS */;
INSERT INTO `commande` VALUES (1,1,42,1),(2,2,65,5),(3,3,101,6),(4,4,109,7),(5,5,106,8),(6,6,68,9),(11,7,22,1),(12,12,22,1),(13,13,22,1),(14,14,22,1),(15,15,22,1),(16,16,22,1),(17,17,22,1);
/*!40000 ALTER TABLE `commande` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `commandehasobjets`
--

LOCK TABLES `commandehasobjets` WRITE;
/*!40000 ALTER TABLE `commandehasobjets` DISABLE KEYS */;
INSERT INTO `commandehasobjets` VALUES (1,3,'3','17/07/2023'),(1,8,'1','17/07/2023'),(2,17,'1','17/07/2023'),(2,18,'1','17/07/2023'),(3,1,'3','17/07/2023'),(3,33,'1','17/07/2023'),(3,35,'1','17/07/2023'),(4,13,'1','17/07/2023'),(4,16,'1','17/07/2023'),(4,18,'1','17/07/2023'),(4,25,'1','17/07/2023'),(5,3,'5','17/07/2023'),(5,21,'1','17/07/2023'),(5,23,'1','17/07/2023'),(5,30,'1','17/07/2023'),(5,32,'1','17/07/2023'),(5,34,'1','17/07/2023'),(6,11,'2','17/07/2023'),(6,36,'1','17/07/2023'),(14,1,'1','21/12/2023'),(15,1,'1','21/12/2023'),(16,1,'1','21/12/2023'),(17,1,'1','21/12/2023');
/*!40000 ALTER TABLE `commandehasobjets` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `favoris`
--

LOCK TABLES `favoris` WRITE;
/*!40000 ALTER TABLE `favoris` DISABLE KEYS */;
INSERT INTO `favoris` VALUES (1,1,2),(1,1,4),(1,1,11);
/*!40000 ALTER TABLE `favoris` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `objets`
--

LOCK TABLES `objets` WRITE;
/*!40000 ALTER TABLE `objets` DISABLE KEYS */;
INSERT INTO `objets` VALUES (1,'Armes',22,5,'/assets/images/print/armes.jpg','/assets/images/print/epee2.png','Longueur 60 cm, composé en plusieurs élements et pret a peindre',3),(2,'Cube',7,15,'/assets/images/print/cube.png','/assets/images/print/cube2.png','De 5cm de cote, pret a peindre composez votre decors',3),(3,'Dé_1',3,8,'/assets/images/print/de.jpg','/assets/images/print/de2.jpg','Demandez votre nombre de faces, vos couleurs et le reste sera du plaisirs de jouer',3),(4,'Dé_2',3,10,'/assets/images/print/de3.jpg','/assets/images/print/d4.jpg','Demandez votre nombre de faces, vos couleurs et le reste sera du plaisirs de jouer',3),(5,'Gobelin',14,4,'/assets/images/print/gobelin.png','/assets/images/print/gobelin2.png','Personnage de 10cm, pret a peindr. Cette figurine pourra donner du relief a vos parties',3),(6,'Horde',13,5,'/assets/images/print/horde.jpg','/assets/images/print/perso2horde.jpg','Personnage de 10 cm pret a peindre. Demandez une figurine pour sublimer vos parties',3),(7,'Loup',14,2,'/assets/images/print/persoloup.png','/assets/images/print/persoloup2.png','Loup de 10 cm pret a peindre. Comme ce loup imaginez vos figurines mettant en valeur vos parties',3),(8,'Tour-4',33,3,'/assets/images/print/tour.jpg','/assets/images/print/tour2.jpg','D\'une hauteur de 28 cm, pret a peindre, cette tour donnera l\'ambiance de votre jeu',3),(9,'Tour_1',32,5,'/assets/images/print/tourdedé.png','/assets/images/print/tour3.png','D\'une hauteur de 26 cm, pret a peindre, cette tour donnera l\'ambiance de votre jeu',3),(10,'Tour_2',24,4,'/assets/images/print/tour6.jpg','/assets/images/print/tour7.jpg','Tour d\'une hauteur de 21 cm pret a peindre. Elle sera l\'élement phare a vos scenes',3),(11,'Tour_3',25,5,'/assets/images/print/tour8.jpg','/assets/images/print/tour9.jpg','Tour de 24 cm pret a peindre, ajoutez des murs pour combler votre collection',3),(12,'Mur',13,10,'/assets/images/print/mur.jpg','/assets/images/print/mur2.jpg','Mur pret a peindre de 15 cm, completez votre collection',3),(13,'Sceptre',27,3,'/assets/images/print/sceptre.png','/assets/images/print/sceptre2.png','Sceptre magique de 52cm, pret a peindre',3),(14,'Livre',49,2,'/assets/images/print/livre.png','/assets/images/print/livre2.png','Ce livre sera capable de contenir vos grimoires etgarder vos secrets',3),(15,'Bague',4,7,'/assets/images/mode/bague.png','/assets/images/mode/bague2.png','Bague en résine vous affichera comme puissant et magique',2),(16,'Chapeau_2',33,10,'/assets/images/mode/chapeau.png','/assets/images/mode/chapeau2.png','Chapeau en imitation cuir, Vous donnera un effet magique',2),(17,'Chapeau_3',37,9,'/assets/images/mode/chapeau4.png','/assets/images/mode/chapeau3.png','Chapeau en feutre, devenez sorcier ou mage',2),(18,'Cape_1',28,5,'/assets/images/mode/cape.jpg','/assets/images/mode/cape2.jpg','Tel un  druide, cette cape sera faire de vous un personnage puissant',2),(19,'Cape_2',31,4,'/assets/images/mode/cape3.jpg','/assets/images/mode/cape4.jpg','Tout magicien doit cacher ses secrets sous sa cape.',2),(20,'Bourse',22,8,'/assets/images/mode/bourse.png','/assets/images/mode/bourse2.png','Cette bourse sera parfaite pour vos dés, jetons ou ecus...',2),(21,'Saccoche_1',19,6,'/assets/images/mode/saccoche.png','/assets/images/mode/saccoche2.png','Saccoche en cuir fait main contiendra parfaitement vos ustensils de jeu',2),(22,'Saccoche_2',18,5,'/assets/images/mode/saccoche3.png','/assets/images/mode/saccoche4.png','Saccoche en cuir fait main, Toujours a portée avec sa ceinture',2),(23,'Tricorne',28,4,'/assets/images/mode/tricorne.png','/assets/images/mode/tricorne2.png','imitation cuir vous donnera un effet d\'aventure',2),(24,'Oreilles ',17,3,'/assets/images/mode/oreille.png','/assets/images/mode/oreille2.png','Oreilles d\'Elfe en silicone. Demandez d\'autres modèles pour parfaire votre personnage',2),(25,'Bague_1',21,5,'/assets/images/mode/bague3.png','/assets/images/mode/bague4.png','Bague un accessoire qui vous donnera le pouvoir.',2),(26,'Bague_2',19,4,'/assets/images/mode/bague5.png','/assets/images/mode/bague6.png','Bague coeur de votre ame de joueur?',2),(27,'Millenium',14,3,'/assets/images/map/millennium.jpg',NULL,'Plan sur rouleau adhesif, donnez vous un espace de jeu',1),(28,'plan_1',13,5,'/assets/images/map/plan1.jpg',NULL,'Nouvelle table de jeu sur cette ville',1),(29,'plan_2',13,4,'/assets/images/map/plan2.jpg',NULL,' Partez dans ce monde inconnu',1),(30,'plan_3',15,6,'/assets/images/map/plan3.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans lunivers fantastique',1),(31,'plan_4',15,8,'/assets/images/map/plan4.jpg',NULL,'Trouvez le secret caché et evitez les pieges',1),(32,'plan_5',14,5,'/assets/images/map/plan5.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans cette eglise mysterieuse',1),(33,'plan_6',14,5,'/assets/images/map/plan6.jpg',NULL,'Trouvez le secret caché et evitez les pieges',1),(34,'plan_7',15,6,'/assets/images/map/plan7.jpg',NULL,'Plan sur rouleau adhesif. Jouez dans cette eglise mysterieuse',1),(35,'plan_8',21,3,'/assets/images/map/plan8.jpg',NULL,'Explorez le monde Altrouille et n\'ayez peur.',1),(36,'plan_9',13,5,'/assets/images/map/plan9.jpg',NULL,'Trouvez le secret caché et evitez les pieges',1),(37,'plan_10',13,5,'/assets/images/map/plan10.jpg',NULL,'Trouvez le secret caché et evitez les pieges',1),(38,'plan_11',13,5,'/assets/images/map/plan11.jpg',NULL,'Trouvez le secret caché et evitez les pieges',1),(39,'plan_12',18,3,'/assets/images/map/plan12.png',NULL,'Imaginez ce que revele ces ruelles',1);
/*!40000 ALTER TABLE `objets` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Dumping data for table `panier_has_objets`
--

LOCK TABLES `panier_has_objets` WRITE;
/*!40000 ALTER TABLE `panier_has_objets` DISABLE KEYS */;
/*!40000 ALTER TABLE `panier_has_objets` ENABLE KEYS */;
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
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'Extraterrestre','Casimir','casimir@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','Ile aux enfants',75000,'Paris',0,'Casimir.jpg',NULL,NULL),(2,'Gribouille','Pierre','p.gribouille@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','58 boulevard des artistes 75000 Paris',75000,'Paris',1,'Pierre.png','Depuis de nombreuse années je fais des illustrations et je mets ma passion a votre service',1),(3,'Crewe','Sarah','S.crewe@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw',' 12 des jardins',75000,'Paris',1,'Sarah.jpg','Ancienne costumiere de theatre j\'ai tout changé pour un plaisir des jeux',2),(4,'Curtis','Flam','capitainflam@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','place du jardin ',75000,'Paris',1,'Flam.jpg','Fan d\'aventure et de jeu de role j\'ai du vous ressortir mes vielles cartes non explorées',1),(5,'Aux fraises','Charlotte','charlottes@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','pays magique',75000,'Paris',0,'Charlotte.jpg',NULL,NULL),(6,'Larson','Nicky','h.montmirail@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','city hunter',75000,'Paris',0,'Nicky.jpg',NULL,NULL),(7,'Sawyer','Tom','t.sawyer@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','bord du mississipi',75000,'Paris',0,'Tom.jpg',NULL,NULL),(8,'Neige','Candy','n.candy@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','1 impasse de la tristesse',75000,'Paris',0,'Candy.jpg',NULL,NULL),(9,'d\'Euphore','Actarus','Actarus.Euphore@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','7 route du centre',75000,'Paris',0,'Actarus.jpg',NULL,NULL),(10,'Alpe','Heidi','A.Heidi@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','le chalet des Alpes',75000,'Paris',1,'Heidi.jpg','Dans mes montagnes j\'ai du tres tot apprendre toute sorte de choses et mes petites mains sont magiques',2),(11,'Corsaire','Albator','Albator.corsaire@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','Atlantis',75000,'Paris',1,'Albator.jpg','Ma passion pour l\'aventure et les objets 3D aggrandiira votre experience',3),(12,'Pirate','Cobra','cobra@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','Ici et la',75000,'Paris',1,'Cobra.jpg','De mes voyages je vous ramene cette experience de la 3D',3),(76,'test','test','j.test@aol.fr','$argon2id$v=19$m=65536,t=5,p=1$8bhYvlYh6jOq2+MgQqjfNw$QF1adjXhlbrneqRvdUDFgOjMCgaljexmVvc0pywXuWw','1 null part',75000,'paris',0,'',NULL,NULL);
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
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
INSERT INTO `utilisateur_has_objets` VALUES (11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),(12,8),(12,9),(12,10),(12,11),(12,12),(12,13),(12,14),(3,15),(3,16),(3,17),(3,18),(3,19),(10,20),(10,21),(10,22),(3,23),(10,24),(10,25),(10,26),(2,27),(4,28),(4,29),(2,30),(4,31),(2,32),(4,33),(2,34),(2,35),(4,36),(4,37),(4,38),(2,39);
/*!40000 ALTER TABLE `utilisateur_has_objets` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2023-12-22  9:57:32
