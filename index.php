<!doctype html>
<html>
<head>
  <title>Concerts</title>
  <meta charset="UTF-8" />
  <link rel="stylesheet" type="text/css" href="concerts.css" />
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
  <script type="text/javascript" src="jaml.js"></script>
  <script type="text/javascript" src="moment.min.js"></script>
  <script type="text/javascript" src="concerts.js"></script>
</head>
<body>
  <div id="concerts-container">
    <?php
      $lines = file('./concerts.txt');
      foreach ($lines as $line_number => $line) {
        echo $line . '<br />';
      }
    ?>
  </div>
  <footer>
    <a href="https://github.com/jfinkels/concerts">view the code</a><br />
    <a href="jslicenses">JavaScript license information</a>
  </footer>
</body>
</html>
