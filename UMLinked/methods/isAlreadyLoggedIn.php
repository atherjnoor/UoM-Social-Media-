<?php
// Assuming session_start() is called earlier in the script

function checkIfUserLoggedIn($home)
{
    $conn = mysqli_connect("localhost", "jerry", "1234jerry", "umlinked");
    // Check if the session is set for a logged-in user
    if (isset($_SESSION['id'])) {
        // User is logged in, redirect to their dashboard or homepage
        header("Location: " . $home); // Change to your desired page
        exit();
    }
}
?>