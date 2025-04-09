
<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


?>
<?php
$servername = "localhost";
$username = "root";
$password = "your_root_password";
$dbname = "flixnet";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

// Répondre avec un JSON
echo json_encode(['success' => true, 'message' => 'Connected successfully']);
?>
