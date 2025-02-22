<?php
session_start();
$home = "./home";
include("./methods/isAlreadyLoggedIn.php");
checkIfUserLoggedIn($home);
?>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="icon" href="./assets/Logo.png">
  <link rel="stylesheet" href="assets/main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UMLinked</title>
</head>

<body>
  <div id="root">
    <div class="opening-page"><img alt="Logo" class="logo" src="./assets/Logo.png">
      <div class="buttons"><a href="./signup/"><button class="button">SIGN UP</button></a><a href="./login/"><button
            class="button">LOG IN</button></a></div>
    </div>
  </div>


  <span id="PING_CONTENT_AUTOPLAY_DETECTION" style="display: none;"></span>
</body>

</html>