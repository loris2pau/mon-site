<?php
$servername = "localhost";
$username = "root";
$password = "cytech0001"; // Utilisez le mot de passe correct
$dbname = "flixnet";

// Créer une connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully"; // Vous pouvez décommenter cette ligne pour vérifier la connexion
?>
