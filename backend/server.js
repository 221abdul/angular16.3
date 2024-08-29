const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // Разрешение запросов с других доменов
app.use(express.json()); // Для работы с JSON в запросах

// Простое API для тестирования
app.post('/user', (req, res) => {
  const userData = req.body;
  console.log('Received user data:', userData);

  // Здесь будет логика сохранения пользователя
  res.status(201).json({ message: 'User created successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
