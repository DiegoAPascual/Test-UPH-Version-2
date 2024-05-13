<?php
include 'conexion.php';

// Obtener una conexión a la base de datos
$conexion = conectarBD();

// Manejar la solicitud del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["submit"])) {
    // Recibir los datos del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];

    // Preparar la consulta SQL para insertar los datos en la base de datos
    $sql = "INSERT INTO encuestados (Nombre, Apellidos, CorreoElectronico, Telefono) VALUES ('$nombre', '$apellidos', '$correo', '$telefono')";

    // Ejecutar la consulta
    if ($conexion->query($sql) === TRUE) {
        // Obtener el ID del último registro insertado
        $idEncuestado = $conexion->insert_id;
        
        // Redirigir al usuario al test después de guardar los datos exitosamente
        header("Location: test.php?idEncuestado=$idEncuestado");
        exit;
    } else {
        echo "Error al guardar los datos: " . $conexion->error;
    }
}

// Cerrar la conexión
$conexion->close();
?>