const axios = require('axios');
// On importe la bibliothèque Axios pour effectuer des requêtes HTTP
const cheerio = require('cheerio');
// On importe la bibliothèque Cheerio pour manipuler et analyser le HTML
const url = 'https://fr.tennisstats247.com/classements/';


axios.get(url)
// On utilise Axios pour effectuer une requête GET vers l'URL spécifiée
  .then(response => {
	   // Lorsque la requête est réussie, le contenu HTML de la page est récupéré dans 'response.data'
    const html = response.data;
    console.log("contenu html a bien été récupérée");
	  // Contenu html bien récuperer
  })
  // Si la requête échoue,on gère l'erreur ici
  .catch(console.error);
