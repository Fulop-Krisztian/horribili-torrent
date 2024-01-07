<?php
// Connect database to search from
require 'PHP/connectdb.php';

$query = "SELECT * FROM test_table";
$result = mysqli_query($conn, $query);

print_r($_GET);

if ($result && mysqli_num_rows($result) > 0) {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Name</th></tr>"; // Adjust columns based on your table structure

    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['Primary key'] . "</td>"; // Change 'id', 'name', 'email' to match your column names
        echo "<td>" . $row['data'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "No data found";
}


$conn->close();
?>