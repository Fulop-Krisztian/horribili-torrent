<?php
// Connect database to search from
require 'connectdb.php';



if (isset($_GET['search'])) {
    $search = $_GET['search'];

    // SQL query to search in 'items' table
    $sql = "SELECT * FROM test_table";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Output data of each row
        while ($row = $result->fetch_assoc()) {
            echo "Item: " . $row['item_name'] . "<br>";
            // Display other item details as needed
        }
    } else {
        echo "No results found.";
    }
}

$conn->close(); // Close the database connection
?>