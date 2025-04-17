const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 5000 // 5 secondes de timeout
    });
    console.log('✅ MongoDB connecté via Docker');
  } catch (err) {
    console.error('❌ Erreur de connexion:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
