<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 1 day
header('Content-Type: application/json');

// Connect database to search from
require 'PHP/connectdb.php';

// Limit for entries to ask for
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 50;

$response = array();

if (isset($_GET['search']) && $_GET['search'] !== '') {
    $search = htmlspecialchars($_GET['search']);
    $query = "SELECT * FROM posts WHERE title LIKE '%$search%' LIMIT $limit";
} else {
    // If 'search' parameter is not found in the GET request, search all posts
    $query = "SELECT * FROM posts LIMIT $limit";
}

$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {

    while ($row = mysqli_fetch_assoc($result)) {
        $response[] = array(
            'post_id' => $row["post_id"],
            'title' => $row["title"],
            'description' => $row["description"],
            'user_id' => $row["user_id"],
            'file_path' => $row["file_path"],
            'timestamp' => $row["timestamp"]
        );
    }
} else {
    $response[] = array();
}

echo json_encode($response);
