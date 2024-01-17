<?php
// Make PHP more lenient
require 'PHP/header.php';
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
            'timestamp' => $row["timestamp"]
        );
    }
} else {
    $response[] = array();
}

echo json_encode($response);
