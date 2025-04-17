// 1. IMPORTS OBLIGATOIRES (dans cet ordre)
require('dotenv').config(); // Charge les variables d'environnement EN PREMIER
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// 2. CONFIGURATION DE BASE
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// 3. CONNEXION MONGODB (avec debug)
console.log('[DEBUG] Tentative de connexion à:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mon-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => {
  console.error('❌ Erreur de connexion MongoDB:', err.message);
  process.exit(1); // Quitte l'application si la connexion échoue
});

// 4. ROUTE DE TEST
app.get('/', (req, res) => {
  res.send('🚀 API Opérationnelle');
});

// 5. DÉMARRAGE DU SERVEUR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n=== SERVEUR ACTIF ===`);
  console.log(`Port: ${PORT}`);
  console.log(`Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`MongoDB: ${process.env.MONGODB_URI}\n`);
});
