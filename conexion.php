<?php
// Configuración de la base de datos
$host = "localhost";
$usuario = "root";
$contrasena = "";
$basededatos = "uph_test";

// Crear una conexión a la base de datos
function conectarBD() {
    global $host, $usuario, $contrasena, $basededatos;
    $conexion = new mysqli($host, $usuario, $contrasena, $basededatos);
    if ($conexion->connect_error) {
        die("Error de conexión a la base de datos: " . $conexion->connect_error);
    }
    return $conexion;
}
?>
