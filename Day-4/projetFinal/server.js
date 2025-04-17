require('dotenv').config();
const express = require('express');
const connectDB = require('./configuration/db');

// Initialisation
const app = express();

// Connexion DB
connectDB();

// ... (le reste de votre configuration Express)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
