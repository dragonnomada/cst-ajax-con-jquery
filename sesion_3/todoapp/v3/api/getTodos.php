<?php
$conn = new mysqli("localhost", "ajax", "ajax$001.002", "todoapp");

if ($conn->connect_error) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("Error de conexión");
}

$result = $conn->query("SELECT id, titulo, completado, creado, actualizado FROM todos");

$todos = [];

while ($row = $result->fetch_assoc()) {
    $row["completado"] = $row["completado"] === "1";
    $todos[] = $row;
}

header('Content-Type: application/json', true);

echo json_encode($todos);

$conn->close();
?>