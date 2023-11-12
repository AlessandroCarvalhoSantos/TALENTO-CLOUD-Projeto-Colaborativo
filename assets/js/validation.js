function verificarEmail(elemento) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        return true;

    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        return false;
    }
}

function verificarEmailCadastro(elemento) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "none";
        return true;
        

    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "block";
        elemento.parentNode.querySelector(".invalid-text").innerText = "Email deve seguir o seguinte padrão xxxx@xxxxx.xxx";
        return false;
    }
}



function verificarSenha(elemento){
    const regex = /^[a-zA-Z0-9]{8,}$/;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "none";
        return true;
    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "block";
        elemento.parentNode.querySelector(".invalid-text").innerText = "Senha deve conter letras de a à z ou A à Z ou 0 à 9 e mais de 8 caracteres";
        return false;
    }
}

function verificarNome(elemento){
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚçÇãõÃÕâêîôûÂÊÎÔÛàèìòùÀÈÌÒÙ\s\']+$/;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "none";
        return true;
    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "block";
        elemento.parentNode.querySelector(".invalid-text").innerText = "Digite um nome válido";
        return false;
    }
}




function verificarUsuario(elemento){
    const regex = /^[a-zA-Z0-9]{5,}$/;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "none";
        return true;
    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        elemento.parentNode.querySelector(".invalid-text").style.display = "block";
        elemento.parentNode.querySelector(".invalid-text").innerText = "Usuário deve conter letras de a à z ou A à Z ou 0 à 9 e mais de 5 caracteres";
        return false;
    }
}


function verificarTextArea(elemento) {
    var regex = /^.{6,}$/u;

    if (regex.test(elemento.value)) {
        elemento.classList.remove("invalid");
        elemento.classList.add("valid");
        return true;
    } else {
        elemento.classList.remove("valid");
        elemento.classList.add("invalid");
        return false;
    }
}

function enviarFormulario() {
    var emailInput = document.querySelector('#email-footer');
    var messageTextarea = document.querySelector('textarea[name="message"]');

    var popupContainer = document.querySelector(".popup-container-footer");
    
    if(!popupContainer)
    {
        popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container-footer');
    }


    verificarEmail(emailInput);
    verificarTextArea(messageTextarea);

    if (emailInput.classList.contains("valid") && messageTextarea.classList.contains("valid")) {
        popupContainer.innerHTML = `
            <div class="popup-content-footer">
                <p>Mensagem enviada com sucesso!</p>
                <button class="popup-button-footer" onclick="fecharPopup()">Fechar</button>
            </div>
        `;
    } else {
         popupContainer.innerHTML = `
            <div class="popup-content-footer">
                <p>Houve um erro em validar suas informações!</p>
                <button class="popup-button-footer" onclick="fecharPopup()">Fechar</button>
            </div>
        `;
    }

    document.body.appendChild(popupContainer);

    setTimeout(function() {
        popupContainer.style.opacity = "1";
    }, 10);
}

function fecharPopup() {
    var popupContainer = document.querySelector('.popup-container-footer');
    popupContainer.style.opacity = "0";

    setTimeout(function() {
        popupContainer.remove();
    }, 300);
}