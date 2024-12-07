const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint contoh
app.get('/api/message', (req, res) => {
    res.json({ message: 'Halo dari backend!' });
});

app.post('/api/message', (req, res) => {
    const userMessage = req.body.message;
    res.json({ reply: `Server menerima: ${userMessage}` });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
