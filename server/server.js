const express = require('express');
const app = express();
const db = require('./config/db.js');

db();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/api/todos', require('./routes/todoRoutes.js'));



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});