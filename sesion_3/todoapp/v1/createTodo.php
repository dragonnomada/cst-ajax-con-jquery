<?php

// 1. Qué tipo de método (HTTP GET, POST, PUT, ...) estará soportado 
//    para que alguien pueda crear un Todo

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error (Método no soportado)', true, 500);
    die("Método no soportado (Usa POST)");
}

// 2. Recuperar los parámetros de la petición (PUT)

//var_dump($_POST);

if (!isset($_POST["titulo"])) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 400 Bad Request (Parámetros no válidos)', true, 400);
    die("Parámetros no válidos (Falta el parámetro `titulo`)");
}

$titulo = $_POST["titulo"];

//echo "Título recibido: " . $titulo;

// 3. Conectarnos a la base de datos

$conn = new mysqli("localhost", "ajax", "ajax$001.002", "todoapp");

if ($conn->connect_error) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("Error de conexión");
}

// 4. Insertar el nuevo Todo con ese título

$statement = $conn->prepare("INSERT INTO todos (titulo) VALUES (?)");

$statement->bind_param("s", $titulo);

if ($statement->execute() !== TRUE) {
    header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);
    die("Error al ejecutar la consulta");
}

$result = $conn->query("SELECT id, titulo, completado, creado, actualizado FROM todos");

$todos = [];

while ($row = $result->fetch_assoc()) {
    $todos[] = $row;
}

// 5. Regresamos los Todos en formato JSON

header('Content-Type: application/json', true);

echo json_encode($todos);

$conn->close();
?>