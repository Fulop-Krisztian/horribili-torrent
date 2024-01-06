<?php
$servername = "192.168.0.220";
$username = "";
$password = "";
$dbname = "horribili-torrent";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
