const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the User Feedback Platform!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});