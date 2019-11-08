-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 08, 2019 at 02:18 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `accreditation`
--

-- --------------------------------------------------------

--
-- Table structure for table `assignments`
--

CREATE TABLE `assignments` (
  `adm_no` int(11) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `assignment_no` int(11) NOT NULL,
  `co_1` int(11) NOT NULL,
  `co_2` int(11) NOT NULL,
  `co_3` int(11) NOT NULL,
  `co_4` int(11) NOT NULL,
  `co_5` int(11) NOT NULL,
  `co_6` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course_dynamic`
--

CREATE TABLE `course_dynamic` (
  `course_code` varchar(6) NOT NULL,
  `fac_id` varchar(20) NOT NULL,
  `batch` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course_list`
--

CREATE TABLE `course_list` (
  `course_code` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `semester` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course_outcomes`
--

CREATE TABLE `course_outcomes` (
  `co_code` varchar(5) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `po_1` int(11) NOT NULL,
  `po_2` int(11) NOT NULL,
  `po_3` int(11) NOT NULL,
  `po_4` int(11) NOT NULL,
  `po_5` int(11) NOT NULL,
  `po_6` int(11) NOT NULL,
  `po_7` int(11) NOT NULL,
  `po_8` int(11) NOT NULL,
  `po_9` int(11) NOT NULL,
  `po_10` int(11) NOT NULL,
  `po_11` int(11) NOT NULL,
  `po_12` int(11) NOT NULL,
  `co_description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `internals`
--

CREATE TABLE `internals` (
  `adm_no` int(11) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `internal_no` int(11) NOT NULL,
  `co_1` int(11) NOT NULL,
  `co_2` int(11) NOT NULL,
  `co_3` int(11) NOT NULL,
  `co_4` int(11) NOT NULL,
  `co_5` int(11) NOT NULL,
  `co_6` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `programme_outcomes`
--

CREATE TABLE `programme_outcomes` (
  `po_code` varchar(4) NOT NULL,
  `po_description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_academics`
--

CREATE TABLE `student_academics` (
  `admission_no` int(10) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `assignments` int(11) NOT NULL,
  `internals` int(11) NOT NULL,
  `end_semester` decimal(10,0) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `adm_no` int(10) UNSIGNED NOT NULL,
  `register_no` varchar(12) NOT NULL,
  `name` varchar(50) NOT NULL,
  `batch` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_details`
--

CREATE TABLE `teacher_details` (
  `fac_id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assignments`
--
ALTER TABLE `assignments`
  ADD PRIMARY KEY (`adm_no`,`course_code`,`assignment_no`);

--
-- Indexes for table `course_dynamic`
--
ALTER TABLE `course_dynamic`
  ADD PRIMARY KEY (`course_code`,`batch`);

--
-- Indexes for table `course_list`
--
ALTER TABLE `course_list`
  ADD PRIMARY KEY (`course_code`);

--
-- Indexes for table `course_outcomes`
--
ALTER TABLE `course_outcomes`
  ADD PRIMARY KEY (`co_code`,`course_code`);

--
-- Indexes for table `internals`
--
ALTER TABLE `internals`
  ADD PRIMARY KEY (`adm_no`,`course_code`,`internal_no`);

--
-- Indexes for table `programme_outcomes`
--
ALTER TABLE `programme_outcomes`
  ADD PRIMARY KEY (`po_code`);

--
-- Indexes for table `student_academics`
--
ALTER TABLE `student_academics`
  ADD PRIMARY KEY (`admission_no`,`course_code`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`adm_no`),
  ADD UNIQUE KEY `register_no` (`register_no`);

--
-- Indexes for table `teacher_details`
--
ALTER TABLE `teacher_details`
  ADD PRIMARY KEY (`fac_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
