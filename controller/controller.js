const accessRequest = '3ebbec49446fc0435ba3878ff041cc2792a1028cee33bba2af236880d9250565';
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
