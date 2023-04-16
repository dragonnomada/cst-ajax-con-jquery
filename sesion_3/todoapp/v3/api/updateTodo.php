<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error (Método no soportado)', true, 500);
    die("Método no soportado (Usa POST)");
}

if (!isset($_POST["id"])) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request (Falta id)', true, 400);
    die("Falta id");
}

if (!isset($_POST["completado"])) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request (Falta completado)', true, 400);
    die("Falta completado");
}

$id = $_POST["id"];
$completado = $_POST["completado"] === "true";

$conn = new mysqli("localhost", "ajax", "ajax$001.002", "todoapp");

if ($conn->connect_error) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("Error de conexión");
}

$statement = $conn->prepare("UPDATE todos SET completado=?, actualizado=current_timestamp() WHERE id=?");

$statement->bind_param("ii", $completado, $id);

if ($statement->execute() !== TRUE) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("Error al ejecutar la consulta");
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