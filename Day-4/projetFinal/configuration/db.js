// 1. Importation avec require (au lieu de import)
const mongoose = require('mongoose');
require('dotenv').config(); // Charge les variables d'environnement

// 2. Fonction de connexion
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mon-api', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(' Connecté à MongoDB');
  } catch (err) {
    console.error(' Erreur de connexion MongoDB:', err.message);
    process.exit(1); // Quitte l'application en cas d'erreur
  }
};

// 3. Export avec module.exports (au lieu de export default)
module.exports = connectDB;
