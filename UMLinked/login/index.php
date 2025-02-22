<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../assets/Logo.png">
  <title>Login</title>
  <link rel="stylesheet" href="../assets/login.css"> <!-- Link to the external CSS file -->
</head>

<body>
  <div id="root">
    <div class="signup-page">
      <img alt="Logo" class="logo" src="../assets/Logo.png">
      <h1>Login</h1>
      <form action="login.php" method="post">
        <div class="input-box">
          <input placeholder="UMNetid" name="umnetid" required="" type="text" value="">
        </div>
        <div class="input-box">
          <input placeholder="Password" name="password" required="" type="password" value="">
        </div>
        <div class="remember-forget">
          <label><input type="checkbox">Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
        <div class="register-link">
          <p>Don't have an account? <a href="../signup">Register</a></p>
        </div>
      </form>
    </div>
  </div>
  <span id="PING_CONTENT_AUTOPLAY_DETECTION" style="display: none;"></span>
</body>

</html>