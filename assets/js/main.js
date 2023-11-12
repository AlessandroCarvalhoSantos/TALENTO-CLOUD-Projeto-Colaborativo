var primeiroElementoFilho = document.body.firstChild;
document.body.insertBefore(criarNavBar(), primeiroElementoFilho);

document.body.appendChild(criarFooter());

generateBackgroundAnimation()
