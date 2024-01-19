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
    $query = "SELECT
                  `posts`.`title`,
                  `files`.`size`,
                  `posts`.`post_id`,
                  `posts`.`timestamp`,
                  `users`.`username`
              FROM
                  `posts`
                  INNER JOIN `files` ON `files`.`post_id` = `posts`.`post_id`
                  INNER JOIN `users` ON `posts`.`user_id` = `users`.`user_id`
              WHERE
                  `posts`.`title` LIKE '%$search%'
              LIMIT $limit";
} else {
    // If 'search' parameter is not found in the GET request, search all posts
    $query = "SELECT
                  `posts`.`title`,
                  `files`.`size`,
                  `posts`.`post_id`,
                  `posts`.`timestamp`,
                  `users`.`username`
              FROM
                  `posts`
                  INNER JOIN `files` ON `files`.`post_id` = `posts`.`post_id`
                  INNER JOIN `users` ON `posts`.`user_id` = `users`.`user_id`
              LIMIT $limit";
}

$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {

    while ($row = mysqli_fetch_assoc($result)) {
        $response[] = array(
            'post_id' => $row["post_id"],
            'title' => $row["title"],
            'size' => $row["size"],
            'timestamp' => $row["timestamp"],
            'username' => $row["username"]
        );
    }
} else {
    $response[] = array();
}

echo json_encode($response);
?>
