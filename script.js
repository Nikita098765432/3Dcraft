// Функция для получения текущей даты и времени
function getCurrentDateTime() {
    const now = new Date();

    // Опции для форматирования даты и времени
    const options = {
        weekday: 'long', // Полное название дня недели
        year: 'numeric',
        month: 'long',   // Полное название месяца
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    // Локализованный формат для России
    const formattedDateTime = now.toLocaleString('ru-RU', options);

    // Добавляем результат в HTML
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Вызов функции сразу после загрузки страницы
getCurrentDateTime();

// Обновляем дату и время каждую секунду
setInterval(getCurrentDateTime, 1000);