<?php
// Establish connection to MySQL database using MySQLi
$conn = new mysqli("localhost", "username", "password", "database_name");  // Modify with your database details

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Execute the query to fetch the 'text' column from the 'messages' table
$result = $conn->query("SELECT text FROM messages");

// Loop through the result set and display each message
while ($row = $result->fetch_assoc()) {
    echo $row['text'] . "<br>";  // Display the message text with a line break
}

// Close the database connection
$conn->close();
?>
