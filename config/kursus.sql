-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2023 at 06:26 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kursus`
--

-- --------------------------------------------------------

--
-- Table structure for table `materi_new`
--

CREATE TABLE `materi_new` (
  `id` int(50) DEFAULT NULL,
  `judul` text NOT NULL,
  `deskripsi` text NOT NULL,
  `link` text NOT NULL,
  `kategori` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `materi_new`
--

INSERT INTO `materi_new` (`id`, `judul`, `deskripsi`, `link`, `kategori`) VALUES
(1, 'Data Analytics', 'Data analytics adalah proses pengolahan, analisis, dan interpretasi data untuk mendapatkan wawasan atau informasi yang berguna. Ini melibatkan penggunaan berbagai teknik statistik, matematika, dan pemrograman komputer untuk menggali pola, tren, dan hubungan dalam kumpulan data.Tujuan dari data analytics adalah untuk mendukung pengambilan keputusan yang lebih baik, mengidentifikasi peluang, dan memecahkan masalah yang kompleks. Ini dapat diterapkan di berbagai bidang, termasuk bisnis, ilmu pengetahuan, kesehatan, keuangan, pemasaran, dan banyak lagi.', 'https://youtu.be/KrF84RTLPzo', 1),
(NULL, '', '', 'https://youtu.be/vxnTfwMqhEk', 1),
(NULL, '', '', 'https://youtu.be/FGjR8xmGvbY', 1),
(NULL, '', '', 'https://youtu.be/qIEe5Vnq40w', 1),
(NULL, '', '', 'https://youtu.be/34Y2KXdPEmo', 1),
(NULL, '', '', 'https://youtu.be/9PQ2mehF3Js', 1),
(NULL, '', '', 'https://youtu.be/T-kjiXW9WEw', 1),
(NULL, '', '', 'https://youtu.be/aMzsobEKa_o', 1),
(NULL, '', '', 'https://youtu.be/IuoIzADAUik', 1),
(2, 'Menjadi Front End Developer untuk Pemula', 'Front end merupakan salah satu bagian dari website yang menampilkan tampilan untuk para pengguna. Pada bagian ini dibuat dengan menggunakan 3 bahasa pemrograman web yaitu HyperText Markup Language (HTTP), Cascading Style Sheets (CSS), dan JavaScript.Tujuan dari frond end adalah untuk memastikan bahwa aplikasi/website dapat tampil dan berguna dengan sebagaimana mestinya.', 'https://youtu.be/qzMPvbL3GRQ', 2),
(NULL, '', '', 'https://youtu.be/hMDJyb7VkYw', 2),
(NULL, '', '', 'https://youtu.be/mELDK1yS8iU', 2),
(NULL, '', '', 'https://youtu.be/tBD8XlgXlus', 2),
(NULL, '', '', 'https://youtu.be/SDROba_M42g', 2),
(NULL, '', '', 'https://youtu.be/RjdKpxhAtI4', 2),
(NULL, '', '', 'https://youtu.be/vaPutSH0sYg', 2),
(NULL, '', '', 'https://youtu.be/qwL6ISjbaaE', 2),
(NULL, '', '', 'https://youtu.be/fQbTeNX1mvM', 2),
(NULL, '', '', 'https://youtu.be/qk3R3mYiuPA', 2),
(NULL, '', '', 'https://youtu.be/4ghGLoxLP9o', 2),
(NULL, '', '', 'https://youtu.be/lypsd9m8Lnw', 2),
(3, 'Menjadi Back End Developer untuk Pemula', 'Back end merupakan bagian dari situs web yang tidak dilihat oleh pelanggan. Back end berurusan dengan data-data di balik layar, ia bertanggung jawab dalam menyimpan dan mengatur data, serta memastikan hal yang ada pada sisi klien berfungsi dan tidak bermasalah. Back end bertujuan untuk mengelola data yang digunakan oleh situs web atau aplikasi. Ini termasuk menyimpan data pengguna, produk, pesanan, dan semua informasi lain yang diperlukan oleh platform.', 'https://youtu.be/mRttyh1GQ5I', 3),
(NULL, '', '', 'https://youtu.be/b39Xqf5iyjo', 3),
(NULL, '', '', 'https://youtu.be/7t7CJwQlmGc', 3),
(NULL, '', '', 'https://youtu.be/L7-u0CHm1GI', 3),
(NULL, '', '', 'https://youtu.be/xYBclb-sYQ4', 3),
(NULL, '', '', 'https://youtu.be/iEeveYoD0SA', 3),
(NULL, '', '', 'https://youtu.be/9ed3b0tSRvI', 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
