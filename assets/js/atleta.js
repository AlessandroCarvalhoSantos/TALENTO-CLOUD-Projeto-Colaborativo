let articles = document.querySelectorAll("article")

articles.forEach(function(article) {
    
    if(article.id != "proximos_jogos"){
        article.addEventListener("mouseover", () =>{
            article.style.transform = "scale(1.08)"
        })
        article.addEventListener("mouseout", ()=>{
            article.style.transform = "scale(1)"
        })
    }
})