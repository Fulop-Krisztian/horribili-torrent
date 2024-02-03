<?php
// When you are done configuring this file, rename it to connectdb.php

// This file should be gitignored!!!


$servername = "192.168.0.220"; // This is where you put your server's IP
$username = "root"; // Username in the database
$password = "HorribiliBestCompany2024"; // Password in the database
$dbname = "horribili-torrent"; // The name of the database in the server you want to connect to

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>