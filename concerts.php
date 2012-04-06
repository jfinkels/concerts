<!doctype html>
<html>
<head>
  <title>Concerts</title>
  <meta charset="UTF-8" />
</head>
<body>
  <div id="concerts-container">
    <?php
      $lines = file('./concerts.txt');
      foreach ($lines as $line_number => $line) {
        echo '* ' . $line . '<br />';
      }
    ?>
  </div>
</body>
</html>
