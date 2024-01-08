<?php
// Connect database to search from
require 'PHP/connectdb.php';

// Limit for entries to ask for

$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 50;

if (isset($_GET['search']) && $_GET['search'] !== '') {
    $search = htmlspecialchars($_GET['search']);
    $query = "SELECT * FROM posts WHERE title LIKE '%$search%' LIMIT $limit";
} else {
    // If 'search' parameter is not found in the GET request, search all posts
    $query = "SELECT * FROM posts LIMIT $limit";
}

echo ('<br>');
if (isset($search)) {
    echo $search;
}
echo ('<br>');
echo ($query);
$result = mysqli_query($conn, $query);

if ($result && mysqli_num_rows($result) > 0) {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Name</th><th>Description</th><th>User_ID</th><th>filepath</th><th>Timestamp</th></tr>"; 


    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>". $row["post_id"] ."</td>";
        echo "<td>". $row["title"] ."</td>";
        echo "<td>". $row["description"] ."</td>";
        echo "<td>". $row["user_id"] ."</td>";
        echo "<td>". $row["file_path"] ."</td>";
        echo "<td>". $row["timestamp"] ."</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "<br>No data found";
}


$conn->close();
?>