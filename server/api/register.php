<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'db_connect.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit; // Handle preflight requests
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid data received']);
    exit;
}

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password
$firstName = $data['firstName'];
$lastName = $data['lastName'];

// Vérifier si l'email existe déjà
$sql_check_email = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql_check_email);

if ($result->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Un utilisateur avec cet email existe déjà.']);
    exit;
}

// Insérer le nouvel utilisateur
$sql_insert = "INSERT INTO users (username, email, password, first_name, last_name)
               VALUES ('$username', '$email', '$password', '$firstName', '$lastName')";

if ($conn->query($sql_insert) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>
