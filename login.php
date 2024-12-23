<?php
include 'config.php';

// Данные из формы входа
$email = $_POST['email'];
$password = $_POST['password'];

// SQL-запрос для проверки пользователя
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Пользователь найден
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo "Авторизация успешна! Добро пожаловать, " . $row['username'];
    } else {
        echo "Неверный пароль!";
    }
} else {
    echo "Пользователь с таким email не найден!";
}

$conn->close();
?>