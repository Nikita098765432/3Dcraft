const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Подключение к базе данных MongoDB
mongoose.connect('mongodb://localhost:27017/usersdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Схема пользователя
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Регистрация
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.json({ message: 'Пользователь зарегистрирован' });
});

// Вход
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.json({ message: 'Неправильные данные' });
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});