
let path = "./"
const currentPageHref = window.location.href;

if (currentPageHref.includes("view")) {
    path = "../"
}

function criarElemento(tag, classes = [], texto = null) {
    const elemento = document.createElement(tag);
    if (classes.length > 0) {
        elemento.classList.add(...classes);
    }
    if (texto !== null) {
        elemento.textContent = texto;
    }
    return elemento;
}

function criarFooter() {

    const footer = criarElemento('footer', ['footer-bar', 'footer-default']);

    const info = criarElemento('div', ['footer-info']);
    const section = criarElemento('div', ['footer-section']);

    const logo = criarElemento('h1', ['logo-text']);
    const logoImg = criarElemento('img');
    logoImg.src = path+'assets/img/FutBrFooterLogo.png';
    logoImg.alt = 'Logo';
    logo.appendChild(logoImg);

    const paragrafo = criarElemento('p', [], 'Desfrute do espetáculo do futebol brasileiro, conhecido mundialmente como o melhor futebol do mundo.');

    const contact = criarElemento('div', ['contact']);
    const envelopeIcon = criarElemento('span');
    envelopeIcon.innerHTML = '<i class="fas fa-envelope"></i> futbr@gmail.com';
    contact.appendChild(envelopeIcon);

    const socialsFooter = criarElemento('div', ['socials-footer']);

    const socialIcons = [
        'fa-facebook',
        'fa-twitter',
        'fa-instagram',
        'fa-linkedin'
    ];

    for (let i = 0; i < socialIcons.length; i++) {
        const iconClass = `${socialIcons[i]}`;
        const socialIcon = criarElemento('a', [], '');

        const elemento = document.createElement('i');
        elemento.classList.add("fab");
        elemento.classList.add(iconClass);

        socialIcon.appendChild(elemento);

        socialsFooter.appendChild(socialIcon);
    }
    
    section.appendChild(logo);
    section.appendChild(paragrafo);
    section.appendChild(contact);
    section.appendChild(socialsFooter);

    info.appendChild(section);
    footer.appendChild(info);

    const contato = criarElemento('div', ['footer-contact']);
    const h2 = criarElemento('h2', [], 'Entre em Contato');

    const form = criarElemento('form');
    const inputEmail = criarElemento('input', ['text-input', 'contact-input']);
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.id = 'email-footer';
    inputEmail.placeholder = 'Seu endereço de e-mail';
    inputEmail.addEventListener('input', (e)=>{verificarEmail(e.target)});


    const textarea = criarElemento('textarea', ['text-input', 'contact-input']);
    textarea.name = 'message';
    textarea.placeholder = 'Sua mensagem';
    textarea.addEventListener('input', (e)=>{verificarTextArea(e.target)});


    const button = criarElemento('button', ['btn', 'btn-big', 'contact-btn'], '');
    button.type = 'button';
    button.innerHTML = '<i class="fas fa-envelope"></i> Enviar';
    button.addEventListener('click', enviarFormulario);

    form.appendChild(inputEmail);
    form.appendChild(textarea);
    form.appendChild(button);

    contato.appendChild(h2);
    contato.appendChild(form);

    footer.appendChild(contato);

    const copy = criarElemento('div', ['footer-copy']);
    copy.textContent = '© 2023 FUTBR | O melhor futebol do Brasil.';
    footer.appendChild(copy);

    return footer;
}


function criarNavBar() {
    const navElement = document.createElement('nav');
    navElement.classList.add('navbar', 'nav-default');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');

    const logoImg = document.createElement('img');
    logoImg.src = path + 'assets/img/logo.png';
    logoImg.alt = 'Logo';

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = '&#9776; Menu';

    menuBtn.addEventListener('click', function() {
        document.querySelector('.links').classList.toggle('active');
    });
    
    const linksDiv = document.createElement('div');
    linksDiv.classList.add('links');

    const linkItems = [
        { text: 'Home', href: path + 'index.html', iconClass: 'fa-home', isSelected: false, modifier: "fas" },
        { text: 'Notícias', href: path + 'view/noticias.html', iconClass: 'fa-newspaper', isSelected: false, modifier: "fas" },
        { text: 'Jogos', href: path + 'view/jogos.html', iconClass: 'fa-trophy', isSelected: false, modifier: "fa-solid" },
        { text: 'Times', href: path + 'view/time.html', iconClass: 'fa-shield-halved', isSelected: false,  modifier: "fa-solid" },
        { text: 'Usuário', href: path + 'view/usuario.html', iconClass: 'fa-user', isSelected: false, modifier: "fas" }
    ];

    const currentPageHref = window.location.href;
    linkItems.forEach(item => {
        if (currentPageHref.includes(item.href.slice(3))) {
            item.isSelected = true;
        }
    });

    linkItems.forEach(item => {
        const linkItemDiv = document.createElement('div');
        linkItemDiv.classList.add('link-item', item.isSelected ? 'selected-item' : null);

        const link = document.createElement('a');
        link.href = item.href;

        const icon = document.createElement('i');
        icon.classList.add(item.iconClass);
        icon.classList.add(item.modifier);
        icon.classList.add("icon");

        link.appendChild(icon);
        link.innerHTML += ` ${item.text}`;

        linkItemDiv.appendChild(link);
        linksDiv.appendChild(linkItemDiv);
    });

    const themeDiv = document.createElement('div');
    themeDiv.classList.add('link-item', 'theme');

    const themeIcon = document.createElement('i');
    themeIcon.classList.add('fas', 'fa-moon');

    themeDiv.appendChild(themeIcon);
    linksDiv.appendChild(themeDiv);

    logoDiv.appendChild(logoImg);

    navElement.appendChild(logoDiv);
    navElement.appendChild(menuBtn);
    navElement.appendChild(linksDiv);

    return navElement;
}


function generateBackgroundAnimation() {
    function generateListItems(numItems=12) {
        var listItems = [];

        for (var i = 0; i < numItems; i++) {
            var listItem = document.createElement('li');
            listItems.push(listItem);
        }

        return listItems;
    }

    var dynamicList = generateListItems(10);

    var areaDiv = document.createElement('div');
    areaDiv.classList.add('area');

    var circlesList = document.createElement('ul');
    circlesList.classList.add('circles');

    dynamicList.forEach(function (item) {
        circlesList.appendChild(item);
    });

    areaDiv.appendChild(circlesList);

    document.body.appendChild(areaDiv);
}