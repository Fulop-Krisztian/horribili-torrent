<?php
require 'PHP/header.php';

// Connect database to write to
require 'PHP/connectdb.php';

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

            // Create the full path to save the file
            $uploadPath = $uploadDirectory . $fileName;

            // Move the uploaded file to the destination directory
            if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadPath)) {
                // File uploaded successfully
                $response = ['status' => 'success', 'message' => 'File uploaded successfully.'];
            } else {
                // Error uploading file
                $response = ['status' => 'error', 'message' => 'Error uploading file.'];
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
echo json_encode($response);
?>
