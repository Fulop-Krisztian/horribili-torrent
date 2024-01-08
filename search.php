<?php
// Connect database to search from
require 'PHP/connectdb.php';

// Limit for entries to ask for
$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 10;
$search = isset($_GET['search']) ? mysqli_real_escape_string($conn, htmlspecialchars($_GET['search'])) : '';

if (isset($_GET['search'])) {
    $search = isset($_GET['search']) ? htmlspecialchars($_GET['search']) : '';
    
    $query = "SELECT * FROM posts WHERE title like {$search}";
} else {
    // If 'search' parameter is not found in the GET request, search all posts
    $query = "SELECT * FROM posts LIMIT '{$limit}'";
}

$query = "SELECT * FROM posts WHERE title like '%$search%'";

$result = mysqli_query($conn, $query);

echo ($search);
echo ($query);

if ($result && mysqli_num_rows($result) > 0) {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Name</th></tr>"; // Adjust columns based on your table structure

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
    echo "No data found";
}


$conn->close();
?>