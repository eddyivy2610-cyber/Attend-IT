-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2025 at 11:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `_student`
--

-- --------------------------------------------------------

--
-- Table structure for table `_student information`
--

CREATE TABLE `_student information` (
  `email` varchar(50) NOT NULL,
  `student name` varchar(50) NOT NULL,
  `name of institution` varchar(50) NOT NULL,
  `siwes duration` varchar(50) NOT NULL,
  `registration number` varchar(50) NOT NULL,
  `phone number` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `birthday` varchar(50) NOT NULL,
  `skill of interest` varchar(100) NOT NULL,
  `course of study` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `_student information`
--

INSERT INTO `_student information` (`email`, `student name`, `name of institution`, `siwes duration`, `registration number`, `phone number`, `gender`, `birthday`, `skill of interest`, `course of study`) VALUES
('abbasfxn@gmail.com', 'Joash Abbas', 'Kaduna State University', '6 months', 'Kasu/22/csc/1154', '09015379370', 'male', '11th January', 'Data Analysis', 'Computer Science '),
('abdullahimukhtar041@gmail.com', 'Abdullahi mukhtar', 'Nuhu Bamalli Polytechnic ', '4 months', 'NCET2300600', '08032823371', 'male  ', '12th February ', 'Computer Hardware and Maintenance', 'Computer engineering technology '),
('abubakarammar662@gmail.com', 'Ammar Abubakar', 'Nuhu Bamalli Polytechnic  ', '4 months ', 'NCET2304035', '09169294889', 'male', '20th September', 'Computer Hardware and Maintenance', 'Computer Engineering Technology '),
('adyusuf741@gmail.com', 'Adam Adam Yusuf', 'Kaduna State University', '6 months', 'KASU/22/CSC/1147', '08148994591', 'male', '31st October', 'Data Analysis', 'Computer Science '),
('alhassanmuhammadghali0001@gmail.com', 'Al-hassan Muhammad Ghali ', 'Nuhu Bamalli Polytechnic ', '1 year', 'NCOM2204942', '08103592729', 'male ', '30th April', 'Data Analysis', 'Computer Science   '),
('Elfarooq5@gmail.com', 'Umar Abubakar Paki', 'Ahmadu Bello University Distance Learning Centre', '6 months  ', 'U22DLCS10542 ', '07071900056', 'male ', '12th July', 'Web Development', 'Computer Science  '),
('hameesuabubakarsani266@gmail.com', 'Hamisu Abubakar Sani ', 'Federal university dutse ', '6 months  ', 'FCP/CSC/22/1083', '08135518500', 'male  ', '25th June', 'Web Development', 'Computer Science   '),
('ibrahimumarabdullahi25@gmail.com', 'Ibrahim Abdullahi Umar', 'Nuhu Bamali Polytechnic ', '4 months', 'NCOM 2301419', ' 09068936099', 'male', '23rd October', 'Web Development\r\n', 'Computer Science '),
('ismailtijjani43@gmail.com', 'Ismail Tijjani', 'Al-qalam University Kastina ', '3 months ', 'CIS/STE/22/1116', '09038546778', 'male ', '22nd November', 'UI/UX', 'Software Engineering'),
('johnlucky2610@gmail.com', 'John I. Lucky', 'Ahmadu Bello University', '6months', 'U21CS1118', '07081066985', 'male', '26th October', 'Web Development', 'Computer Science'),
('korexonly@gmail.com', 'Muhammad Abass Mudasir', 'Airforce institute of technology ', '3 months', 'U22CS1088', '09064999914', 'male ', '31st October', 'Full stack Development', 'Computer Science   '),
('Kwamanisa@gmail.com', 'Hussaini  Kwami Anisa', 'Airforce institute of technology', '3 months', 'U22CS1063', '09031666393', 'female', '29th January', 'Data Analysis', 'Computer Science  '),
('maryamabubakaryahaya4@gmail.com', 'Maryam Abubakar Yahaya ', 'Federal University Dutse', '6 months ', 'FCP/CSE/22/1080', '07062506388', 'female ', '30th December', 'Web Development\r\n', 'Software Engineering'),
('ndemsamuel5@gmail.com', 'Samuel Ndem', 'Nuhu Bamalli Polytechnic ', '4 months', 'NCOM2300887', '08063452916', 'male', '15th March', 'Graphics Design', 'Computer Science'),
('nshuaibu815@gmail.com', 'Nura Shu\'aibu', 'Nuhu Bamali Polytechnic', '4 months', 'NCOM2302194', '08167223820', 'male', '3rd March', 'Data Analysis', 'Computer Science'),
('Okoyepascal310@gmail.com', 'Okoye Onyedikachi Paschal', 'University of Nigeria Nsukka ', '6 months', '2022/246737', '08051653083', 'male', '1st May', 'Web Development', 'Computer Science'),
('oniahokechukwu@gmail.com', 'Okechukwu Oniah', 'University of Nigeria Nsukka  ', '4 months', '2022/250931', '09160664926', 'male', '7th August', 'Web Development', 'Computer Science '),
('Pashirumar003@gmail.com', 'Umar Pashir', 'Federal university Dutse ', '6months ', 'FCP/CSC/22/1008', '07048447822', 'male ', '4th November', 'Web Development', 'Computer Science '),
('shuaibuananu@gmail.com', 'Awodi Ananu', 'Air Force Institute of Technology', '3 months', 'U22ICE1006', '08132529287', 'Female', '10th December', 'Data Analysis', 'Information and Communication Engineering'),
('wakawajeremiah@gmail.com', 'Jeremiah Hyeladi Wakawa', 'Federal University Gashua', '6 months ', 'U22/CPS/1097', '09037091852', 'male', '22 December', 'Web Development', 'Computer Science '),
('yusufmnasir3@gmail.com', 'Yusuf Muhammad Nasir', 'Nuhu Bamalli Polytechnic', '4 month', 'NCET 2302385', '09076011313', 'male', '10th May', 'Web Development', 'Computer engineering technology'),
('zipporahtoma@gmail.com', 'Zipporah Toma', 'Nuhu Bamali Polytechnic', '4 months', 'Doom2308148', '08081870743', 'female', '14th September', 'Cyber security', 'Computer Science');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `_student information`
--
ALTER TABLE `_student information`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
