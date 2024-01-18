<?php
require 'PHP/header.php';

// Connect database to write to
require 'PHP/connectdb.php';

// Include the torrent functions
require 'PHP/torrentFunctions.php'; // Adjust the path accordingly

// Maximum file size allowed (1MB)
$maxFileSize = 1 * 1024 * 1024; // 1MB in bytes

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Check if the 'file' key exists in the $_FILES array
    if (isset($_FILES['file'])) {

        // Check if the file size is within the allowed limit
        if ($_FILES['file']['size'] <= $maxFileSize) {

            // Define a target directory for file uploads
            $uploadDirectory = 'uploads/';

            // Get the name of the uploaded file
            $fileName = basename($_FILES['file']['name']);

            // Check if the file has a ".torrent" extension
            $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
            if (strtolower($fileExtension) === 'torrent') {

                // Create the full path to save the file
                $uploadPath = $uploadDirectory . $fileName;

                // Move the uploaded file to the destination directory
                if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadPath)) {
                    // File uploaded successfully

                    // Extract additional form data
                    $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : '1';
                    $title = isset($_POST['title']) ? $_POST['title'] : null;
                    $description = isset($_POST['description']) ? $_POST['description'] : null;

                    // Use prepared statements to prevent SQL injection
                    $stmt = mysqli_prepare($conn, "INSERT INTO `posts` (`title`, `description`, `user_id`) VALUES (?, ?, ?)");
                    mysqli_stmt_bind_param($stmt, 'ssi', $title, $description, $user_id);
                    $result = mysqli_stmt_execute($stmt);

                    // Check if the query was successful
                    if ($result) {
                        // Get the auto-incremented post_id
                        $post_id = mysqli_insert_id($conn);

                        // Insert data into the files table
                        $fileSize = getTorrentSize($uploadPath);
                        $filePath = $uploadPath;

                        // --- INSERT STATEMENT ---
                        $fileInsertStmt = mysqli_prepare($conn, "INSERT INTO `files` (`name`, `path`, `size`, `user_id`, `post_id`) VALUES (?, ?, ?, ?, ?)");
                        mysqli_stmt_bind_param($fileInsertStmt, 'sssii', $fileName, $filePath, $fileSize, $user_id, $post_id);
                        $fileResult = mysqli_stmt_execute($fileInsertStmt);

                        // Check if the query was successful
                        if ($fileResult) {
                            $response = ['status' => 'success', 'message' => 'File uploaded and data inserted into the database successfully.'];
                        } else {
                            $response = ['status' => 'error', 'message' => 'Error inserting data into the files table.'];
                        }

                        // Close the prepared statement
                        mysqli_stmt_close($fileInsertStmt);
                        // --- INSERT STATEMENT ---


                    } else {
                        $response = ['status' => 'error', 'message' => 'Error inserting data into the database. (error 2)'];
                    }

                    // Close the prepared statement
                    mysqli_stmt_close($stmt);

                } else {
                    // Error uploading file
                    $response = ['status' => 'error', 'message' => 'Error uploading file.'];
                }
            } else {
                // Invalid file type
                $response = ['status' => 'error', 'message' => 'Invalid file type. Only .torrent files are allowed.'];
            }
        } else {
            // File size exceeds the allowed limit
            $response = ['status' => 'error', 'message' => 'File size exceeds the allowed limit.'];
        }
    } else {
        // 'file' key not found in the request
        $response = ['status' => 'error', 'message' => 'File not found in the request.'];
    }
} else {
    // Invalid request method
    $response = ['status' => 'error', 'message' => 'Invalid request method.'];
}

// Output the JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>