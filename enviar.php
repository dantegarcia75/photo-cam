<?php

// llamando a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje']

// datos para el correo
$destinatario = "dante.m.garcia.75@gmail.com";
$asunto = "Contacto desde Photo CAM Landing Page";

$carta = "De: $hombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// enviando mensaje
mail($destinatario, $asunto, $carta);

?>
