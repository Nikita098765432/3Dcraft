<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}

// Подключение к базе данных
$conn = new mysqli('localhost', 'root', '', 'site_db');
$user_id = $_SESSION['user_id'];
$result = $conn->query("SELECT * FROM users WHERE id=$user_id");
$user = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Личный кабинет</title>
</head>
<body>
    <h1>Добро пожаловать, <?php echo $user['username']; ?>!</h1>
    <p>Email: <?php echo $user['email']; ?></p>
    <a href="logout.php">Выйти</a>
</body>
</html>