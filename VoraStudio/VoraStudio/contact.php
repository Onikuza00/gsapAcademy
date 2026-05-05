<?php
// Configuración
$destinatario = 'hola@vorastudio.cat'; // <--- PON AQUÍ TU CORREO
$asunto_web = 'Nou missatge des de VoraStudio';

// Recoger datos del POST
$nombre = isset($_POST['name']) ? $_POST['name'] : 'Sense nom';
$email = isset($_POST['email']) ? $_POST['email'] : 'Sense email';
$asunto_cliente = isset($_POST['subject']) ? $_POST['subject'] : 'Sense assumpte';
$mensaje = isset($_POST['message']) ? $_POST['message'] : 'Sense missatge';

// Construcción del cuerpo del mensaje
$contenido = "Has rebut un nou missatge des del formulari de contacte de la web:\n\n";
$contenido .= "Nom: $nombre\n";
$contenido .= "Email: $email\n";
$contenido .= "Assunto: $asunto_cliente\n\n";
$contenido .= "Missatge:\n$mensaje\n";

// Cabeceras del correo
$headers = "From: web@vorastudio.com\r\n"; // Es mejor usar un correo de tu dominio
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Enviar el correo
$exito = mail($destinatario, $asunto_web, $contenido, $headers);

// Responder a JavaScript (AJAX)
header('Content-Type: application/json');
if ($exito) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'No s\'ha pogut enviar el correu.']);
}
?>
