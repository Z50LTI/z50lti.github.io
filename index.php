<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <style>
    form {
      display: block;
      margin: 0 auto;
      width: 300px;
    }

    label {
      display: block;
    }

    input[type="text"], input[type="email"], textarea {
      width: 100%;
    }
  </style>
</head>
<body>
  <h1>Contact Form</h1>

  <form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <input type="submit" value="Send">
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $name = $_POST["name"];
      $email = $_POST["email"];
      $message = $_POST["message"];

      $to = "koppizsolt@outlook.com";
      $subject = "New message from $name";
      $headers = "From: $email";

      mail($to, $subject, $message, $headers);
  }
  ?>
</body>
</html>
