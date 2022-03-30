<?php
require_once "./db_connection.php";

switch ($_SERVER['REQUEST_METHOD']) {
  case "GET":
    get_landmarks();
    break;
  default:
    http_response_code(400);
}

    id int not null primary key auto_increment,
    name varchar(120) not null,
    lat float not null,
    lng float not null,
    thumb varchar(255) not null,
    desc_ varchar(3000) not null
function get_landmark()
{
  $db = get_or_create_db_connection();
  $result = $db->query("select * from landmark");
  while ($row = $result->fetch_assoc()) {
    $json[] = [
      "id" => (int)$row["id"],
      "name" => $row["name"],
      "position" => [
        "lat" => (float)$row["lat"],
        "lng" => (float)$row["lng"],
      ],
      "thumb" => $row["thumb"],
      "desc" => $row["desc_"],
    ];
  }

  header("Content-Type: application/json");
  $max_age = 60 * 60 * 24;
  header("Cache-control: max-age=$max_age");
  echo json_encode($json ?? []);
}
