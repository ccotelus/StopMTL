<?php

$DBUSER = "francis";
$DBPASS = "francis";
$DBNAME = "stopmtl";
$DBPORT = 5432;
$DBHOST = "localhost";

// $link = mysqli_connect("localhost", $DBUSER, $DBPASS, $DBNAME);
$link = pg_connect("host=$DBHOST port=$DBPORT dbname=$DBNAME user=$DBUSER password=$DBPASS");

if (!$link) {
    echo "Erreur : Impossible de se connecter à MySQL." . PHP_EOL;
    // echo "Errno de débogage : " . pg_connect_errno() . PHP_EOL;
    // echo "Erreur de débogage : " . pg_connect_error() . PHP_EOL;
    exit;
}

// GET ALL THE POINTS
if($_SERVER['REQUEST_METHOD'] === 'GET'){
  $result = pg_query($link, "SELECT * FROM points");
  $parsedResult = pg_fetch_all($result);

  echo json_encode($parsedResult);
}

// STORE POINT
if($_SERVER['REQUEST_METHOD'] === 'POST'){

  $lat = floatval($_POST['lat']);
  $lng = floatval($_POST['lng']);
  $predate = new DateTime($_POST['date']);
  $date = $predate->format('Y-m-d');
  $moment = $_POST['moment']; //mysqli_real_escape_string($_POST['moment'], $link);
  $age = intval($_POST['age']);
  $genre = $_POST['genre']; //mysqli_real_escape_string($_POST['genre'], $link);
  $groupe_ethnique = $_POST['groupe_ethnique']; //mysqli_real_escape_string($_POST['groupe_ethnique'], $link);
  $orientation_sexuelle = $_POST['orientation_sexuelle']; //mysqli_real_escape_string($_POST['orientation_sexuelle'], $link);

  $insert = pg_query($link, "INSERT INTO points (lat, lng, date, moment, age, genre, groupe_ethnique, orientation_sexuelle) VALUES ($lat, $lng, '$date', '$moment', $age, '$genre', '$groupe_ethnique', '$orientation_sexuelle') RETURNING *");
  $parsedInsertResult = pg_fetch_all($insert);
  echo "TESSSST";
  print_r( $_POST);
  echo json_encode($parsedInsertResult);
}

pg_close($link);
