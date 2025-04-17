// Utilise un tableau utilisateur comme base de données temporaire
const user = [];

// Fonction pour créer un nouvel utilisateur
const createUser = (email, hashedPassword) => {
  const newUser = {
    id: users.length + 1,
    email,
    password: hashedPassword, // On stocke le mot de passe HACHÉ
    createdAt: new Date().toISOString()
  };
//Ajoute les nouveaux utilisateurs à la liste des utilisateurs existant
  users.push(newUser);
  return newUser;
};

// Trouve un utilisateur par email
const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

// Récupère tous les utilisateurs (pour la route 
const getAllUsers = () => {
  // On ne retourne pas les mots de passe dans le résultat !
  return users.map(user => ({
    id: user.id,
    email: user.email,
    createdAt: user.createdAt
  }));
};

// Supprime un utilisateur par ID (pour DELETE /users/:id)
const deleteUserById = (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};

// Exporte les fonctions
module.exports = {
  createUser,
  findUserByEmail,
  getAllUsers,
  deleteUserById
};
