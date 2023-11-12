


function createCard(item) {
    var card = document.createElement('div');
    card.classList.add('card-noticia');

    var title = document.createElement('h3');
    title.classList.add('card-title-noticia');
    title.textContent = item.querySelector('title').textContent;

    var description = document.createElement('p');
    description.classList.add('card-description-noticia');
    description.innerHTML = item.querySelector('description').textContent; // Use innerHTML para decodificar os caracteres especiais

    // Adicione a nova <span> para a data dentro do <p>
    var pubDateSpan = document.createElement('p');
    pubDateSpan.classList.add('pub-date-noticia');
    pubDateSpan.textContent = "Data de publicação: " + formatDate(item.querySelector('pubDate').textContent);
    description.appendChild(pubDateSpan);

    var link = document.createElement('a');
    link.classList.add('read-more-noticia');
    link.href = item.querySelector('link').textContent;
    link.textContent = 'Ler Mais sobre';
    link.target = '_blank';

    var image = document.createElement('img');
    var mediaContent = item.querySelector('content');
    image.src = mediaContent 
    ? mediaContent.getAttribute('url') 
    : "https://ibom.com.br/wp-content/uploads/2021/06/1612alexandre-magalhaes-Coluna-139-O-futebol-mineiro-e-as-noticias-da-terra-distante-FOTO-ilustrativa-WEB-800x445.jpg";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    return card;
}

function generateHTML(xmlDoc) {
    var channel = xmlDoc.querySelector('channel');
    var itemsContainer = document.getElementById('newsContainer');

    var items = channel.querySelectorAll('item');
    items.forEach(function (item) {
        var card = createCard(item);
        itemsContainer.appendChild(card);
    });
}

// Função para formatar a data
function formatDate(rawDate) {
    var date = new Date(rawDate);
    return date.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });
}


executeRSS(generateHTML);
