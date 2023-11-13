const accessRequest = 'bf9cd08b826b7181ed2d161b834e13b9cb953a9a45180243ae571dfd87dbfa62';
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const xmlUrl = 'https://www.ogol.com.br/rss/noticias.php';

let xmlDoc;


function executeRSS(generateHTML)
{
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${accessRequest}`);

  fetch(corsAnywhereUrl + xmlUrl, {
    method: 'GET',
    headers: headers
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação HTTP');
    }
    return response.blob();
  })
  .then(blob => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(blob, 'ISO-8859-1'); // Alterado para ISO-8859-1
    });
  })
  .then(xmlText => {
    if (!xmlText.trim()) {
      throw new Error('O XML está vazio');
    }
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    if (xmlDoc.querySelector('parsererror')) {
      throw new Error('Erro ao analisar o XML');
    }

    generateHTML(xmlDoc);
  })
  // .catch(error => console.error('Erro:', error));

}
