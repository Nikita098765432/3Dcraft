<?php
$servername = "localhost";
$username = "root"; // Имя пользователя MySQL
$password = "";     // Пароль MySQL (по умолчанию пустой)
$dbname = "3d_modeling_site"; // Название базы данных

// Подключение к базе данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
?>