<?php
session_start(); // Make sure session is started
include '../methods/login.php';
include '../methods/connect.php';
$umnetid = $_POST['umnetid'];
$password = $_POST['password'];

if (isset($umnetid) && isset($password) && isValidString($umnetid) && isValidString($password)) {
    // Ensure the username is valid using regex
    // Prepare SQL query to check if the user exists
    $sql = $conn->prepare("SELECT * FROM users WHERE username=?");
    $sql->bind_param('s', $umnetid);
    $sql->execute();
    $result = $sql->get_result();

    if ($result->num_rows < 1) {
        // If user does not exist
        header("location:../?error=userDoesNotExist");
        exit();
    } else {
        // User exists, verify the password
        $row_hash = $result->fetch_assoc();
        if (!password_verify($password, $row_hash['password'])) {
            // If password is incorrect
            header("location:../?error=wrongPassword");
            exit();
        }

        // Store the user ID in the session and redirect to home page
        $_SESSION['id'] = $row_hash['id'];
        header("location:../../");
        exit();
    }

} else {
    // If username is not set
    header("location:../?error=containsSpacesOrEmpty");
    exit();
}
?>