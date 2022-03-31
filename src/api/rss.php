<?php
require_once "./db_connection.php";

$baseUrl = "$_SERVER[REQUEST_SCHEME]://$_SERVER[HTTP_HOST]";

$db = get_or_create_db_connection();
$result = $db->query("select name, desc_ from landmark");
$items = "";
while ($row = $result->fetch_assoc()) {
    $items .= "
 <item>
  <title>$row[name]</title>
  <description>$row[desc_]</description>
  <link>$baseUrl</link>
  <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
 </item>";
}

$xml = "
<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<rss version=\"2.0\">
<channel>
 <title>Cardiff Landmarks</title>
 <description>My RSS Feed!</description>
 <link>$baseUrl</link>
 <copyright>All rights reserved</copyright>
 <lastBuildDate>Mon, 06 Sep 2010 00:01:00 +0000</lastBuildDate>
 <pubDate>Sun, 06 Sep 2009 16:20:00 +0000</pubDate>
 <ttl>1800</ttl>
 $items
</channel>
</rss>";

echo $xml;
header("Content-Type: application/rss+xml; charset=ISO-8859-1");
