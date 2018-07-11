-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 11, 2018 at 06:45 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beecard`
--

-- --------------------------------------------------------

--
-- Table structure for table `ebouchures`
--

CREATE TABLE `ebouchures` (
  `id` int(11) NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  `ebrochureId` text CHARACTER SET utf8 NOT NULL,
  `paramsUrl` text CHARACTER SET utf8 NOT NULL,
  `userId` int(11) NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `organization` text CHARACTER SET utf8 NOT NULL,
  `tel` text CHARACTER SET utf8 NOT NULL,
  `cc_tel` text CHARACTER SET utf8 NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `website` text CHARACTER SET utf8 NOT NULL,
  `line` text CHARACTER SET utf8 NOT NULL,
  `facebook` text CHARACTER SET utf8 NOT NULL,
  `twitter` text CHARACTER SET utf8 NOT NULL,
  `linkedin` text CHARACTER SET utf8 NOT NULL,
  `photo` text CHARACTER SET utf8 NOT NULL,
  `qrcode` text CHARACTER SET utf8 NOT NULL,
  `address` text CHARACTER SET utf8 NOT NULL,
  `locality` text CHARACTER SET utf8 NOT NULL,
  `region` text CHARACTER SET utf8 NOT NULL,
  `country` text CHARACTER SET utf8 NOT NULL,
  `postalCode` text CHARACTER SET utf8 NOT NULL,
  `isActive` tinyint(4) NOT NULL,
  `locale` text CHARACTER SET utf8 NOT NULL,
  `publish` tinyint(4) NOT NULL,
  `private` text CHARACTER SET utf8 NOT NULL,
  `market` text CHARACTER SET utf8 NOT NULL,
  `note` text CHARACTER SET utf8 NOT NULL,
  `expiryDate` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ebouchures`
--

INSERT INTO `ebouchures` (`id`, `name`, `ebrochureId`, `paramsUrl`, `userId`, `content`, `organization`, `tel`, `cc_tel`, `email`, `website`, `line`, `facebook`, `twitter`, `linkedin`, `photo`, `qrcode`, `address`, `locality`, `region`, `country`, `postalCode`, `isActive`, `locale`, `publish`, `private`, `market`, `note`, `expiryDate`, `created_at`, `updated_at`) VALUES
(1, 'good morning', '', '', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 0, 'undefined', 'undefined', 'undefined', '0000-00-00 00:00:00', '2018-06-20 10:02:18', '2018-06-25 06:35:29'),
(2, 'Savilla', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 10:05:39', '2018-06-20 10:05:39'),
(6, 'eiei', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 07:13:12', '2018-06-20 09:57:35'),
(7, 'Kapagos', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 07:20:06', '2018-06-20 07:20:06'),
(9, 'kobe', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 07:21:51', '2018-06-20 09:09:22'),
(10, 'haleluya', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 08:27:21', '2018-06-20 08:27:21'),
(11, 'Maldives', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 08:27:45', '2018-06-20 08:27:45'),
(12, 'MOgg', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 08:29:20', '2018-06-20 08:29:20'),
(13, 'papika', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 08:38:03', '2018-06-20 08:38:03'),
(14, 'mami', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-20 08:38:45', '2018-06-20 08:38:45'),
(16, 'sawasdeekub2', '5b2b6a7b9f5c277418e5b0b2', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-21 09:06:03', '2018-06-21 09:06:03'),
(17, 'anie', '5b2b6b10ceb1f53c95ce542c', '', 222, 'hello god', 'xxxxxx', 'sssss', 'xxxxx', 'aaaaa', 'xxxxx', 'xxxxxx', 'aaaa', 'undefined', 'ssss', 'ssss', 'ssss', 'ssss', 'sss', 'sss', 'sss', '90110', 0, 'aaaa', 0, 'bbbb', 'aaa', 'ssssssss', '0000-00-00 00:00:00', '2018-06-21 09:08:32', '2018-06-21 09:59:46'),
(18, 'sawasdeekub2511', '5b2b6b9ab0dfa52257180cc4', '', 222, 'hello god', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-21 09:10:50', '2018-06-21 09:10:50'),
(21, 'halod', '5b2b6cdba50bcadce24c3a94', '', 222, 'hello god', 'xxxxxx', 'sssss', 'xxxxx', 'aaaaa', 'xxxxx', 'xxxxxx', 'aaaa', 'undefined', 'ssss', 'ssss', 'ssss', 'ssss', 'sss', 'sss', 'sss', '', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-06-21 09:16:11', '2018-06-21 09:16:11'),
(22, 'halodzzzzz', '5b2b6d143af7534b2dd2c571', '', 222, 'hello god', 'xxxxxx', 'sssss', 'xxxxx', 'aaaaa', 'xxxxx', 'xxxxxx', 'aaaa', 'undefined', 'ssss', 'ssss', 'ssss', 'ssss', 'sss', 'sss', 'sss', 'ssss', 0, 'aaaa', 0, 'bbbb', 'aaa', 'ssssssss', '0000-00-00 00:00:00', '2018-06-21 09:17:08', '2018-06-21 09:17:08'),
(23, 'nobody', '5b3094578afdbfdeacdd5e2d', '', 0, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, 'undefined', 0, 'undefined', 'undefined', 'undefined', '0000-00-00 00:00:00', '2018-06-25 07:05:59', '2018-06-25 07:05:59'),
(25, 'Noppadon', '5b3d9671e821a86b58ecba89', '', 0, 'let move to go s on', 'mama.co.Ltd', '075253433', '+66', 'arisa@mail.com', 'www.go.co.th', '', '', 'undefined', '', '', '', '1/13 labado Rd.', '', '', 'Thailand', '90110', 0, '', 0, '', '', '', '0000-00-00 00:00:00', '2018-07-05 03:54:25', '2018-07-05 03:56:24');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `filename` text CHARACTER SET utf8 NOT NULL,
  `path` text CHARACTER SET utf8 NOT NULL,
  `mimetype` text CHARACTER SET utf8 NOT NULL,
  `create_by` text CHARACTER SET utf8 NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `filename`, `path`, `mimetype`, `create_by`, `created_at`, `updated_at`) VALUES
(10, '74eb1bfge_8ajejfvu5.jpg', 'uploads74eb1bfge_8ajejfvu5.jpg', 'image/jpeg', '', '2018-07-04 10:49:26', '2018-07-04 10:49:26'),
(11, 'auqr4y53h_5dgjhpllc.jpg', 'uploadsauqr4y53h_5dgjhpllc.jpg', 'image/jpeg', '', '2018-07-05 04:25:27', '2018-07-05 04:25:27'),
(12, 'auqr4y53h_kfb9cp4o3.jpg', 'uploadsauqr4y53h_kfb9cp4o3.jpg', 'image/jpeg', '', '2018-07-05 04:25:29', '2018-07-05 04:25:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userId` text CHARACTER SET utf8 NOT NULL,
  `firstname` text CHARACTER SET utf8 NOT NULL,
  `lastname` text CHARACTER SET utf8 NOT NULL,
  `username` text CHARACTER SET utf8 NOT NULL,
  `password` text CHARACTER SET utf8 NOT NULL,
  `email` text CHARACTER SET utf8 NOT NULL,
  `tel` text CHARACTER SET utf8 NOT NULL,
  `privilege` text CHARACTER SET utf8 NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userId`, `firstname`, `lastname`, `username`, `password`, `email`, `tel`, `privilege`, `created_at`) VALUES
(1, '5b30ced8d44d046d6386e47f', 'mike', 'kod', 'Mikeaha', 'langjisd', 'Good@mail.com', '0823333333', 'undefined', '2018-06-25 11:15:36'),
(2, '5b30cedbb443bb9d60b5a200', 'mike', 'kod', 'Mikeaha', 'langjisd', 'Good@mail.com', '0823333333', 'undefined', '2018-06-25 11:15:39'),
(6, '5b31f0bb99ff843dbb1bd5e2', 'mike', 'kod', 'Mikeahzzzzz', 'langjisd', 'Goodzzzz@mail.com', '0823333333', 'undefined', '2018-06-26 07:52:27'),
(7, '5b31f5db65edf63c898ad585', 'mike', 'kod', 'lol', 'langjisd', 'Good2mail@mail.com', '0823333333', 'undefined', '2018-06-26 08:14:19'),
(8, '5b31f63a1ff0cea695692769', 'Nang', 'kala', 'malakaSA', 'malakaSAS', 'malakaSA@mail.com', '0827345678', 'undefined', '2018-06-26 08:15:54'),
(9, '5b3207012a87162074f5cb0e', 'Icecream', 'Gelate', 'Gelate', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', 'gelate@mail.com', '025645567', 'undefined', '2018-06-26 09:27:29'),
(10, '5b333ab67fd73ddbe5bdc6f5', 'CoCo', 'Ishibanya', 'cocoishi', 'e164cac54aa129733bf5e53336d7088742bf7b17', 'coco@mail.com', 'undefined', 'undefined', '2018-06-27 07:20:22'),
(11, '5b333ed52bd48abc79179dde', 'CoCo', 'Ishibanya', 'cocoishi2', 'e164cac54aa129733bf5e53336d7088742bf7b17', 'coco2@mail.com', 'undefined', 'undefined', '2018-06-27 07:37:57'),
(12, '5b334ac04ad61234808ed02a', 'CoCo', 'Ishibanya', 'cocoishi3', 'e164cac54aa129733bf5e53336d7088742bf7b17', 'coco3@mail.com', 'undefined', 'undefined', '2018-06-27 08:28:48'),
(13, '5b334b475c1f9c164d9f201f', 'CoCo', 'Ishibanya', 'cocoishi4', 'e164cac54aa129733bf5e53336d7088742bf7b17', 'coco4@mail.com', 'undefined', 'undefined', '2018-06-27 08:31:03'),
(14, '5b334b47c65e8db7b90779c5', 'CoCo', 'Ishibanya', 'cocoishi5', 'e164cac54aa129733bf5e53336d7088742bf7b17', 'coco5@mail.com', 'undefined', 'undefined', '2018-06-27 08:31:03'),
(16, '5b3d98028652cfbdad125b93', 'Nang', 'kala', 'Nanglol', 'f5b6df6c8713fa3f6128b9db2ac95f0d27337389', 'Nanglo@mail.com', '081234578', 'user', '2018-07-05 04:01:06'),
(17, '5b408738e78afa02a9a02e16', 'zzzz', 'hhhhh', 'zazazaza', '4017a29cb21ed66c97056154716dc3c4e535f191', 'Goodzsd@mail.com', '08233333234', 'users', '2018-07-07 09:26:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ebouchures`
--
ALTER TABLE `ebouchures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ebouchures`
--
ALTER TABLE `ebouchures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
