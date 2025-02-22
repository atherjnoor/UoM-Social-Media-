<?php
include '../../connect/index.php';  // Fixed the path error
session_start();

// Check if the form is submitted
if (isset($_POST["submitProfile"])) {

    // Get the current user from the session
    $query = "SELECT * FROM users WHERE id = '" . $_SESSION['id'] . "'";
    $result = $conn->query($query);
    $row = $result->fetch_assoc();
    $username = $row['username'];
    $userId = $_SESSION['id'];

    // Fetch the user's details
    $userQuery = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($userQuery);
    $row = $result->fetch_assoc();

    $fullName = $row["fullname"];
    $contact = $row["contact"];
    $dob = $row["dob"];
    $gender = $row["gender"];
    $sentMessages = $row["sent_mess"];

    // Profile picture upload processing
    if (isset($_FILES['profilePic']) && ($_FILES['profilePic']['error'] == 0)) {
        $fileType = $_FILES['profilePic']['type'];

        // Allowed image types
        $allowedTypes = ['jpeg', 'jpg', 'png', 'gif', 'ico', 'webp', 'jfif'];

        // Check if file type is allowed
        foreach ($allowedTypes as $type) {
            if (strpos($fileType, $type) !== false) {

                // Delete old profile picture if it exists
                $profilePicPath = "../userdata/$userId/profile_pic/index.png";
                if (file_exists($profilePicPath)) {
                    unlink($profilePicPath);
                }

                // Move the uploaded file to the profile pic directory
                move_uploaded_file($_FILES["profilePic"]["tmp_name"], $profilePicPath);

                // Ensure the file has been moved correctly
                while (file_exists($profilePicPath)) {
                    header("location: ./");
                    exit();
                }
            }
        }
    } else {
        header("location: ./?filetype=error");
        exit();
    }
} else {
    header("location: ../../");
    exit();
}
?>