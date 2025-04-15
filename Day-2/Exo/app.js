import * as cheerio from 'cheerio';

async function scrapeTennisRankings() {
  try {
    // 1. Récupération du HTML
    
    const $ = await cheerio.fromURL('https://fr.tennisstats247.com/classements/');

    // 2. Sélection du tableau (ajustez le sélecteur si nécessaire)
    const table = $('table').first(); // Cible le premier tableau de la page
    const rows = table.find('tr');

    // 3. Extraction des en-têtes
    const headers = [];
    rows.eq(0).find('th').each((i, th) => {
      headers.push($(th).text().trim());
    });

    // 4. Extraction des données
    const rankings = [];
    rows.slice(1).each((i, row) => {
      const rowData = {};
      $(row).find('td').each((j, td) => {
        const header = headers[j] || `col_${j}`;
        rowData[header] = $(td).text().trim();
      });
      if (Object.keys(rowData).length > 0) {
        rankings.push(rowData);
      }
    });

    // 5. Résultat
    console.log('Données extraites :', rankings);
    return rankings;

  } catch (error) {
    console.error('Erreur lors du scraping :', error);
  }
}

// Exécution
scrapeTennisRankings();
