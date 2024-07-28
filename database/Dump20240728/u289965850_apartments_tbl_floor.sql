-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 217.21.74.51    Database: u289965850_apartments
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.8-MariaDB-cll-lve

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
-- Table structure for table `tbl_floor`
--

DROP TABLE IF EXISTS `tbl_floor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_floor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `block_id` bigint(20) NOT NULL,
  `number_of_high_area` int(11) NOT NULL,
  `public_area` float NOT NULL,
  `total_area` float NOT NULL,
  `progress` tinyint(4) DEFAULT NULL,
  `desc` varchar(256) DEFAULT NULL,
  `created_by` bigint(20) NOT NULL,
  `updated_by` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted` enum('true','false') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_floor_block_idx` (`block_id`),
  CONSTRAINT `fk_floor_block` FOREIGN KEY (`block_id`) REFERENCES `tbl_block` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_floor`
--

LOCK TABLES `tbl_floor` WRITE;
/*!40000 ALTER TABLE `tbl_floor` DISABLE KEYS */;
INSERT INTO `tbl_floor` VALUES (5,6,19,1,1,20,'first floor',46,46,'2024-04-07 14:30:09','2024-04-07 14:30:09','false'),(6,6,19,1,1,20,'second floor',46,46,'2024-04-07 14:38:51','2024-04-07 14:38:51','false'),(7,6,19,1,1,20,'third floor',46,46,'2024-04-07 14:39:05','2024-04-07 14:39:05','false'),(8,6,19,1,1,20,'fourth floor',46,46,'2024-04-07 14:39:14','2024-04-07 14:39:14','false'),(9,6,19,1,1,20,'Fifth floor',46,46,'2024-04-07 15:04:24','2024-04-07 15:04:24','false'),(10,6,19,1,1,20,'Sixth floor',46,46,'2024-04-07 15:04:35','2024-04-07 15:04:35','false'),(11,6,19,1,1,20,'Seventh floor',46,46,'2024-04-07 15:04:42','2024-04-07 15:04:42','false'),(12,6,19,1,1,20,'Eighth floor',46,46,'2024-04-07 15:04:49','2024-04-07 15:04:49','false'),(13,6,19,1,1,20,'Ninth floor',46,46,'2024-04-07 15:04:55','2024-04-07 15:04:55','false'),(14,6,19,1,1,20,'Tenth floor',46,46,'2024-04-07 15:05:02','2024-04-07 15:05:02','false'),(15,6,19,1,1,20,'Eleventh floor',46,46,'2024-04-07 15:05:10','2024-04-07 15:05:10','false'),(16,6,19,1,1,20,'Twelfth floor',46,46,'2024-04-07 15:05:17','2024-04-07 15:05:17','false'),(17,6,19,1,1,20,'Thirteenth floor',46,46,'2024-04-07 15:05:24','2024-04-07 15:05:24','false'),(18,6,19,1,1,20,'Fourteenth floor',46,46,'2024-04-07 15:05:31','2024-04-07 15:05:31','false'),(19,6,19,1,1,20,'Fifteenth floor',46,46,'2024-04-07 15:05:37','2024-04-07 15:05:37','false'),(20,6,19,1,1,20,'Sixteenth floor',46,46,'2024-04-07 15:05:43','2024-04-07 15:05:43','false'),(21,6,19,1,1,20,'Seventeenth floor',46,46,'2024-04-07 15:05:50','2024-04-07 15:05:50','false'),(22,6,19,1,1,20,'Eighteenth floor',46,46,'2024-04-07 15:05:57','2024-04-07 15:05:57','false'),(23,6,19,1,1,20,'Nineteenth floor',46,46,'2024-04-07 15:06:04','2024-04-07 15:06:04','false'),(24,6,19,1,1,20,'Twentieth floor',46,46,'2024-04-07 15:06:11','2024-04-07 15:06:11','false'),(25,6,19,1,1,20,'Twenty-first floor',46,46,'2024-04-07 15:06:19','2024-04-07 15:06:19','false'),(26,6,19,1,1,20,'Twenty-second floor',46,46,'2024-04-07 15:06:25','2024-04-07 15:06:25','false'),(27,6,19,1,1,20,'Twenty-third floor',46,46,'2024-04-07 15:06:33','2024-04-07 15:06:33','false'),(28,6,19,1,1,20,'Twenty-fourth floor',46,46,'2024-04-07 15:06:41','2024-05-10 23:04:09','false'),(29,6,19,1,1,20,'Twenty-fifth floor',46,46,'2024-04-07 15:06:49','2024-04-07 15:06:49','false'),(30,6,19,1,2,20,'Twenty-sixth floor',46,46,'2024-04-07 15:06:56','2024-05-11 06:15:52','false'),(32,11,1,1,1,20,'First floor',46,46,'2024-04-24 10:30:23','2024-04-24 10:30:23','false'),(33,11,1,1,1,20,'Second floor',46,46,'2024-04-24 10:30:31','2024-04-24 10:30:31','false'),(34,12,1,1,1,20,'First floor',46,46,'2024-04-24 10:50:05','2024-04-24 10:50:05','false'),(35,12,1,1,1,20,'Second floor',46,46,'2024-04-24 10:50:30','2024-04-24 10:50:30','false'),(37,17,1,1,1,1,'first floor',46,46,'2024-05-29 12:17:46','2024-05-29 12:17:46','false'),(38,7,19,1,1,20,'first floor',46,46,'2024-04-07 14:30:09','2024-04-07 14:30:09','false'),(39,7,19,1,1,20,'second floor',46,46,'2024-04-07 14:38:51','2024-04-07 14:38:51','false'),(40,7,19,1,1,20,'third floor',46,46,'2024-04-07 14:39:05','2024-04-07 14:39:05','false'),(41,7,19,1,1,20,'fourth floor',46,46,'2024-04-07 14:39:14','2024-04-07 14:39:14','false'),(42,7,19,1,1,20,'Fifth floor',46,46,'2024-04-07 15:04:24','2024-04-07 15:04:24','false'),(43,7,19,1,1,20,'Sixth floor',46,46,'2024-04-07 15:04:35','2024-04-07 15:04:35','false'),(44,7,19,1,1,20,'Seventh floor',46,46,'2024-04-07 15:04:42','2024-04-07 15:04:42','false'),(45,7,19,1,1,20,'Eighth floor',46,46,'2024-04-07 15:04:49','2024-04-07 15:04:49','false'),(46,7,19,1,1,20,'Ninth floor',46,46,'2024-04-07 15:04:55','2024-04-07 15:04:55','false'),(47,7,19,1,1,20,'Tenth floor',46,46,'2024-04-07 15:05:02','2024-04-07 15:05:02','false'),(48,7,19,1,1,20,'Eleventh floor',46,46,'2024-04-07 15:05:10','2024-04-07 15:05:10','false'),(49,7,19,1,1,20,'Twelfth floor',46,46,'2024-04-07 15:05:17','2024-04-07 15:05:17','false'),(50,7,19,1,1,20,'Thirteenth floor',46,46,'2024-04-07 15:05:24','2024-04-07 15:05:24','false'),(51,7,19,1,1,20,'Fourteenth floor',46,46,'2024-04-07 15:05:31','2024-04-07 15:05:31','false'),(52,7,19,1,1,20,'Fifteenth floor',46,46,'2024-04-07 15:05:37','2024-04-07 15:05:37','false'),(53,7,19,1,1,20,'Sixteenth floor',46,46,'2024-04-07 15:05:43','2024-04-07 15:05:43','false'),(54,7,19,1,1,20,'Seventeenth floor',46,46,'2024-04-07 15:05:50','2024-04-07 15:05:50','false'),(55,7,19,1,1,20,'Eighteenth floor',46,46,'2024-04-07 15:05:57','2024-04-07 15:05:57','false'),(56,7,19,1,1,20,'Nineteenth floor',46,46,'2024-04-07 15:06:04','2024-04-07 15:06:04','false'),(57,7,19,1,1,20,'Twentieth floor',46,46,'2024-04-07 15:06:11','2024-04-07 15:06:11','false'),(58,7,19,1,1,20,'Twenty-first floor',46,46,'2024-04-07 15:06:19','2024-04-07 15:06:19','false'),(59,7,19,1,1,20,'Twenty-second floor',46,46,'2024-04-07 15:06:25','2024-04-07 15:06:25','false'),(60,7,19,1,1,20,'Twenty-third floor',46,46,'2024-04-07 15:06:33','2024-04-07 15:06:33','false'),(61,7,19,1,1,20,'Twenty-fourth floor',46,46,'2024-04-07 15:06:41','2024-05-10 23:04:09','false'),(62,7,19,1,1,20,'Twenty-fifth floor',46,46,'2024-04-07 15:06:49','2024-04-07 15:06:49','false'),(63,22,19,1,1,20,'first floor',46,46,'2024-04-07 14:30:09','2024-04-07 14:30:09','false'),(64,22,19,1,1,20,'second floor',46,46,'2024-04-07 14:38:51','2024-04-07 14:38:51','false'),(65,22,19,1,1,20,'third floor',46,46,'2024-04-07 14:39:05','2024-04-07 14:39:05','false'),(66,22,19,1,1,20,'fourth floor',46,46,'2024-04-07 14:39:14','2024-04-07 14:39:14','false'),(67,22,19,1,1,20,'Fifth floor',46,46,'2024-04-07 15:04:24','2024-04-07 15:04:24','false'),(68,22,19,1,1,20,'Sixth floor',46,46,'2024-04-07 15:04:35','2024-04-07 15:04:35','false'),(69,22,19,1,1,20,'Seventh floor',46,46,'2024-04-07 15:04:42','2024-04-07 15:04:42','false'),(70,22,19,1,1,20,'Eighth floor',46,46,'2024-04-07 15:04:49','2024-04-07 15:04:49','false'),(71,22,19,1,1,20,'Ninth floor',46,46,'2024-04-07 15:04:55','2024-04-07 15:04:55','false'),(72,22,19,1,1,20,'Tenth floor',46,46,'2024-04-07 15:05:02','2024-04-07 15:05:02','false'),(73,22,19,1,1,20,'Eleventh floor',46,46,'2024-04-07 15:05:10','2024-04-07 15:05:10','false'),(74,22,19,1,1,20,'Twelfth floor',46,46,'2024-04-07 15:05:17','2024-04-07 15:05:17','false'),(75,22,19,1,1,20,'Thirteenth floor',46,46,'2024-04-07 15:05:24','2024-04-07 15:05:24','false'),(76,22,19,1,1,20,'Fourteenth floor',46,46,'2024-04-07 15:05:31','2024-04-07 15:05:31','false'),(77,22,19,1,1,20,'Fifteenth floor',46,46,'2024-04-07 15:05:37','2024-04-07 15:05:37','false'),(78,22,19,1,1,20,'Sixteenth floor',46,46,'2024-04-07 15:05:43','2024-04-07 15:05:43','false'),(79,22,19,1,1,20,'Seventeenth floor',46,46,'2024-04-07 15:05:50','2024-04-07 15:05:50','false'),(80,22,19,1,1,20,'Eighteenth floor',46,46,'2024-04-07 15:05:57','2024-04-07 15:05:57','false'),(81,22,19,1,1,20,'Nineteenth floor',46,46,'2024-04-07 15:06:04','2024-04-07 15:06:04','false'),(82,22,19,1,1,20,'Twentieth floor',46,46,'2024-04-07 15:06:11','2024-04-07 15:06:11','false'),(83,22,19,1,1,20,'Twenty-first floor',46,46,'2024-04-07 15:06:19','2024-04-07 15:06:19','false'),(84,22,19,1,1,20,'Twenty-second floor',46,46,'2024-04-07 15:06:25','2024-04-07 15:06:25','false'),(85,22,19,1,1,20,'Twenty-third floor',46,46,'2024-04-07 15:06:33','2024-04-07 15:06:33','false'),(86,22,19,1,1,20,'Twenty-fourth floor',46,46,'2024-04-07 15:06:41','2024-05-10 23:04:09','false'),(87,22,19,1,1,20,'Twenty-fifth floor',46,46,'2024-04-07 15:06:49','2024-04-07 15:06:49','false'),(88,23,19,1,1,20,'first floor',46,46,'2024-04-07 14:30:09','2024-04-07 14:30:09','false'),(89,23,19,1,1,20,'second floor',46,46,'2024-04-07 14:38:51','2024-04-07 14:38:51','false'),(90,23,19,1,1,20,'third floor',46,46,'2024-04-07 14:39:05','2024-04-07 14:39:05','false'),(91,23,19,1,1,20,'fourth floor',46,46,'2024-04-07 14:39:14','2024-04-07 14:39:14','false'),(92,23,19,1,1,20,'Fifth floor',46,46,'2024-04-07 15:04:24','2024-04-07 15:04:24','false'),(93,23,19,1,1,20,'Sixth floor',46,46,'2024-04-07 15:04:35','2024-04-07 15:04:35','false'),(94,23,19,1,1,20,'Seventh floor',46,46,'2024-04-07 15:04:42','2024-04-07 15:04:42','false'),(95,23,19,1,1,20,'Eighth floor',46,46,'2024-04-07 15:04:49','2024-04-07 15:04:49','false'),(96,23,19,1,1,20,'Ninth floor',46,46,'2024-04-07 15:04:55','2024-04-07 15:04:55','false'),(97,23,19,1,1,20,'Tenth floor',46,46,'2024-04-07 15:05:02','2024-04-07 15:05:02','false'),(98,23,19,1,1,20,'Eleventh floor',46,46,'2024-04-07 15:05:10','2024-04-07 15:05:10','false'),(99,23,19,1,1,20,'Twelfth floor',46,46,'2024-04-07 15:05:17','2024-04-07 15:05:17','false'),(100,23,19,1,1,20,'Thirteenth floor',46,46,'2024-04-07 15:05:24','2024-04-07 15:05:24','false'),(101,23,19,1,1,20,'Fourteenth floor',46,46,'2024-04-07 15:05:31','2024-04-07 15:05:31','false'),(102,23,19,1,1,20,'Fifteenth floor',46,46,'2024-04-07 15:05:37','2024-04-07 15:05:37','false'),(103,23,19,1,1,20,'Sixteenth floor',46,46,'2024-04-07 15:05:43','2024-04-07 15:05:43','false'),(104,23,19,1,1,20,'Seventeenth floor',46,46,'2024-04-07 15:05:50','2024-04-07 15:05:50','false'),(105,23,19,1,1,20,'Eighteenth floor',46,46,'2024-04-07 15:05:57','2024-04-07 15:05:57','false'),(106,23,19,1,1,20,'Nineteenth floor',46,46,'2024-04-07 15:06:04','2024-04-07 15:06:04','false'),(107,23,19,1,1,20,'Twentieth floor',46,46,'2024-04-07 15:06:11','2024-04-07 15:06:11','false'),(108,23,19,1,1,20,'Twenty-first floor',46,46,'2024-04-07 15:06:19','2024-04-07 15:06:19','false'),(109,23,19,1,1,20,'Twenty-second floor',46,46,'2024-04-07 15:06:25','2024-04-07 15:06:25','false'),(110,23,19,1,1,20,'Twenty-third floor',46,46,'2024-04-07 15:06:33','2024-04-07 15:06:33','false'),(111,23,19,1,1,20,'Twenty-fourth floor',46,46,'2024-04-07 15:06:41','2024-05-10 23:04:09','false'),(112,23,19,1,1,20,'Twenty-fifth floor',46,46,'2024-04-07 15:06:49','2024-04-07 15:06:49','false'),(113,25,1,1,1,1,'testing floor 1 at testing block 1',46,46,'2024-06-08 05:54:06','2024-06-08 05:54:06','false'),(114,26,2,2,2,2,'testing floor 2 at block 2',46,46,'2024-06-08 05:54:28','2024-06-08 06:41:49','false');
/*!40000 ALTER TABLE `tbl_floor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-28 14:21:03
