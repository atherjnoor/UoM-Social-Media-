<!DOCTYPE html>
<html lang="en">

<head>


  <meta charset="UTF-8">
  <link rel="icon" href="../assets/Logo.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>UMLinked</title>

  <!-- Link to external CSS files -->
  <link rel="stylesheet" href="../assets/profile.css">
</head>

<body>
  <div id="root">
    <div class="profile-container">
      <form action="profile.php" method="post" enctype="multipart/form-data">
        <h1>Student Profile</h1>
        <img id="pfp" src="../assets/defaultpfp.jpeg" />
        <div class="form-group">
          <label for="profilePic">Profile Picture:</label>
          <input id="profilePic" accept="image/*" type="file" name="profilePic">
        </div>
        <div class="form-group">
          <label for="pronouns">Pronouns:</label>
          <input id="pronouns" placeholder="Enter your pronouns" type="text" name="pronouns" value="">
        </div>
        <div class="form-group">
          <label for="major">Major:</label>
          <input id="major" placeholder="Enter your major" type="text" name="major" value="">
        </div>
        <div class="form-group">
          <label for="yearOfStudy">Year of Study:</label>
          <select id="yearOfStudy" name="yearOfStudy">
            <option value="">Select your year of study</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
        <div class="form-group">
          <label for="coursesTaken">Courses Taken:</label>
          <textarea id="coursesTaken" name="coursesTaken" placeholder="List courses you've taken"></textarea>
        </div>
        <div class="form-group">
          <label for="interests">Interests:</label>
          <textarea id="interests" name="interests" placeholder="Share your interests"></textarea>
        </div>
        <div class="form-group">
          <label for="skills">Skills:</label>
          <textarea id="skills" name="skills" placeholder="List your skills"></textarea>
        </div>
        <button type="submit" name="submitProfile">Save Profile</button>
      </form>
    </div>
  </div>

  <script type="module" src="/src/main.jsx?t=1740241471167"></script>
  <span id="PING_CONTENT_AUTOPLAY_DETECTION" style="display: none;"></span>
</body>

</html>