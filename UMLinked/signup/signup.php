<?php
session_start();
include '../methods/connect.php';
include '../methods/login.php';
$umnetid = $_POST['umnetid'];
$fullname = $_POST['fullname'];
$dob = $_POST['dateofbirth'];//dateofbirth
$pass = $_POST['password'];
$cpass = $_POST['confirmPassword'];
$gender = $_POST['gender'];
$passenc = password_hash($pass, PASSWORD_BCRYPT);
if (!isValidString($umnetid) || !isValidString($fullname) || !isValidString($dob)) {
    header("location:./?error=containsSpacesOrEmpty");
    exit();
}
if (!isValidUmnetid($umnetid)) {
    header("location:./?error=invalidUmnetID");
}
if (!isValidFullname($fullname)) {
    header("location:./?error=invalidFullname");
    exit();
}

if (!isValidDob($dob)) {
    header("location:./?error=invalidDateOfBirth");
    exit();
}
if ($cpass != $pass) {
    header("location:./?error=passwordMismatch");
    exit();
}

//check if someone already has that username
$sql = $conn->prepare("SELECT * FROM users WHERE username = ?");
$sql->bind_param('s', $umnetid);
$sql->execute();
$result = $sql->get_result();

if ($result->num_rows > 0) {
    // A match is found, now check which field caused the conflict
    $row = $result->fetch_assoc();
    if ($row['username'] == $umnetid) {
        header("location:./?error=usernameTaken");
        exit();
    }
} else {
    // Validate UMnet ID length
    if (strlen($umnetid) < 30) {
        // Validate Fullname length
        if (strlen($fullname) < 120) {

            // Insert new user into database
            $sql = $conn->prepare("INSERT INTO users(username, fullname, dob, password, gender)
            VALUES(?,?,?,?,?)");
            $sql->bind_param('sssss', $umnetid, $fullname, $dob, $passenc, $gender);
            $sql->execute();

            // Fetch user details and assign session
            $sql = $conn->prepare("SELECT * FROM users WHERE username = ? LIMIT 1");
            $sql->bind_param('s', $umnetid);
            $sql->execute();
            $result = $sql->get_result();
            $row = $result->fetch_assoc();
            $id = $row["id"];
            $_SESSION['id'] = $id;

            // Create user directories
            mkdir("../userdata/$id");
            mkdir("../userdata/$id/post/");
            mkdir("../userdata/$id/profile_pic/");

            header("location:../");
            exit();
        } else {
            header("location:./?error=fullnameTooLong");
            exit();
        }
    } else {
        header("location:./?error=umnetidTooLong");
        exit();
    }
}

?>