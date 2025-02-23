<?php
session_start();
$home = "../home";
include("../methods/isAlreadyLoggedIn.php");
checkIfUserLoggedIn($home);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="../assets/Logo.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UMLinked</title>
  <link rel="stylesheet" href="../assets/signup.css"> <!-- Link to external CSS file -->
</head>

<body>
  <div id="root">
    <div class="signup-page">
      <img alt="Logo" class="logo" src="../assets/Logo.png">
      <h1>Sign Up</h1>
      <form action="signup.php" method="post">
        <input id="fullName" placeholder="Full Name" name="fullname" required type="text" pattern="[A-Za-z ]*"
          title="Only letters and spaces allowed">
        <input id="username" placeholder="Username" required name="umnetid" type="text" pattern="[A-Za-z0-9]+"
          title="Only letters and numbers allowed (no spaces)">
        <input id="dob" placeholder="Date of Birth(DD-MM-YYYY)" name="dateofbirth" required type="date">
        <select required name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-binary</option>
          <option value="preferNotToSay">Prefer Not to Say</option>
        </select>
        <input id="password" name="password" placeholder="Password" required type="password">
        <input id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required type="password">

        <div class="password-strength">
          <div id="strengthBar" class="strength-bar"></div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  </div>

  <!-- Link to external JavaScript file -->
  <script src="../assets/signup.js"></script>
</body>

</html>