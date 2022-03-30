<?php

$_db = null;

function get_or_create_db_connection()
{
  global $_db;
  if ($_db == null) {
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $_db = new mysqli("localhost", "eira", "aaaaaa123", "eira");
    $_db->set_charset("utf8mb4");
  }
  return $_db;
}
