const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur la plateforme de retours utilisateurs !');
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
