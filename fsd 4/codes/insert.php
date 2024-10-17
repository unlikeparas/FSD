<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$conn = new mysqli("localhost", "root", "", "student_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$roll_no = $_POST['roll_no'];
$password = $_POST['password'];
$contact = $_POST['contact'];

// Insert query
$sql = "INSERT INTO students (first_name, last_name, roll_no, password, contact)
        VALUES ('$first_name', '$last_name', '$roll_no', '$password', '$contact')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
