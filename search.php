<?php
// Connect database to search from
require 'PHP/connectdb.php';



if (isset($_GET['search'])) {
    $search = $_GET['search'];
    echo $search;
    $sql = "SELECT * FROM test_table";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "Item: " . $row['item_name'] . "<br>";
        }
    } else {
        echo "No results found.";
    }
}

$conn->close();
?>