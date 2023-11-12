executeRSS(templateDestaques);
executeRSS(templateNoticiasHome);

function gerarNoticiasDados(dados, qtd=10)
{
    var noticias = 0;
    var channel = dados.querySelector('channel');

    var items = channel.querySelectorAll('item');


    let destaquesData = [];

    for(let i =0; i<items.length; i++)
    {   
        if(!(noticias < qtd))
            break;
        else
            noticias++

        var mediaContent = items[i].querySelector('content');
        var imageUrl = mediaContent 
        ? mediaContent.getAttribute('url') 
        : "https://ibom.com.br/wp-content/uploads/2021/06/1612alexandre-magalhaes-Coluna-139-O-futebol-mineiro-e-as-noticias-da-terra-distante-FOTO-ilustrativa-WEB-800x445.jpg";
    
        var titulo =  items[i].querySelector('title').textContent;

        var descricao = items[i].querySelector('description').textContent;

        destaquesData.push({imagem: imageUrl, titulo: titulo, descricao: descricao })
    }

    return destaquesData;
}


function templateDestaques(dados) {

    destaquesData = gerarNoticiasDados(dados,10);

    const destaquesContainer = document.getElementById('destaques');

    const titulo = document.createElement('h2');
    titulo.innerText = "Destaques";
    destaquesContainer.appendChild(titulo);

    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container-destaques';


    destaquesData.forEach(destaque => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const imagem = document.createElement('img');
        imagem.src = destaque.imagem;
        imagem.alt = `Imagem ${destaque.titulo}`;

        const titulo = document.createElement('h3');
        titulo.textContent = destaque.titulo;

        cardDiv.appendChild(imagem);
        cardDiv.appendChild(titulo);

        cardsContainer.appendChild(cardDiv);
    });

    destaquesContainer.appendChild(cardsContainer)
}
function templateNoticiasHome(dados) {

    let noticias = gerarNoticiasDados(dados, qtd=2);

    const newsSection = document.getElementById("news-section");

    noticias.forEach((noticia) => {
        const card = document.createElement("div");
        card.className = "card";

        const cardImage = document.createElement("div");
        cardImage.className = "card-image";

        const image = document.createElement("img");
        image.src = noticia.imagem;
        image.alt = noticia.titulo;

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const heading = document.createElement("h3");
        heading.textContent = noticia.titulo;

        const paragraph = document.createElement("p");
        paragraph.innerHTML = noticia.descricao;

        cardImage.appendChild(image);
        cardContent.appendChild(heading);
        cardContent.appendChild(paragraph);
        card.appendChild(cardImage);
        card.appendChild(cardContent);

        const newsList = newsSection.querySelector(".news-list");
        if (newsList) {
            newsList.appendChild(card);
        } else {
            const newList = document.createElement("ul");
            newList.className = "news-list";
            newList.appendChild(card);
            newsSection.appendChild(newList);
        }
    });
}



