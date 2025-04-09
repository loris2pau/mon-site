
<?php
include 'db_connect.php';

$data = json_decode(file_get_contents('php://input'), true);

// Vérifiez les données reçues
if (!$data || !isset($data['username']) || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid data received']);
    exit;
}

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT); // Hash the password
$firstName = $data['firstName'];
$lastName = $data['lastName'];

$sql = "INSERT INTO users (username, email, password, first_name, last_name)
        VALUES ('$username', '$email', '$password', '$firstName', '$lastName')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>
