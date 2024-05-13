<?php
include 'conexion.php';

// Obtener una conexión a la base de datos
$conexion = conectarBD();

// Manejar la solicitud de guardado del resultado
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["idEncuestado"]) && isset($_POST["nombreCarrera"])) {
    // Recibir los datos del formulario
    $idEncuestado = $_POST["idEncuestado"];
    $nombreCarreras = $_POST["nombreCarrera"];

    // Si es un array, tomar solo el primer nombre de carrera
    $nombreCarrera = is_array($nombreCarreras) ? $nombreCarreras[0] : $nombreCarreras;

    // Preparar la consulta SQL para actualizar el registro con el resultado de la carrera
    $sql = "UPDATE encuestados SET Resultado = '$nombreCarrera' WHERE Id = '$idEncuestado'";

    // Ejecutar la consulta
    if ($conexion->query($sql) === TRUE) {
        echo "Resultado guardado en la base de datos.";
    } else {
        echo "Error al guardar el resultado: " . $conexion->error;
    }
}

// Cerrar la conexión
$conexion->close();
?>







