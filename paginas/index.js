const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 63342;

app.use(cors());
app.use(bodyParser.json());

// NOVI API URLs (voorbeeld)
const NOVI_API_REGISTER = 'https://api.novi.nl/v1/users';
const NOVI_API_LOGIN = 'https://api.novi.nl/v1/auth/login';

// ➡️ Endpoint voor registratie via NOVI API
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await fetch(NOVI_API_REGISTER, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}

    }
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ message: errorData.message || 'Registratie mislukt bij NOVI.' });
        }

        const data = await response.json();
        res.status(201).json({ message: 'Registratie succesvol bij NOVI.', data });

    } catch (error) {
        console.error('Registratiefout:', error);
        res.status(500).json({ message: 'Serverfout tijdens registratie.' });
    }
});

// ➡️ Endpoint voor login via NOVI API
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await fetch(NOVI_API_LOGIN, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            'X-Api-Key': frontendopdracht: 9WTihG0MZKy6eDBkbfwB;
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ message: errorData.message || 'Login mislukt bij NOVI.' });
        }

        const data = await response.json();

        // Je krijgt hier waarschijnlijk al een JWT token terug vanuit NOVI
        res.status(200).json({ message: 'Login succesvol bij NOVI.', token: data.token });

    } catch (error) {
        console.error('Loginfout:', error);
        res.status(500).json({ message: 'Serverfout tijdens login.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});