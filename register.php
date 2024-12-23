<?php
include 'config.php';

// Данные из формы регистрации
$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Хэшируем пароль

// SQL-запрос на добавление пользователя
$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Пользователь успешно зарегистрирован!";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close(); // Закрываем соединение
?>