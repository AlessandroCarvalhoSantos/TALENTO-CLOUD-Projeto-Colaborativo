showTab("login")
function showTab(tabName) {
    var tabs = document.querySelectorAll('.usuario-tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    var selectedTab = document.getElementById(tabName + 'Tab');
    selectedTab.classList.add('active');
}

function validarFormularioLogin(e) {
    
    var usuarioValido = verificarUsuario(document.getElementById("username"));
    var senhaValida = verificarSenha(document.getElementById("password"));
    if (usuarioValido && senhaValida) {
        var dados = obterDoCache("dadoUsuario");
        const usuario = document.getElementById("username").value;
        const senha = document.getElementById("password").value
        if(usuario == dados.usuario && senha == dados.senha)
        {
            mostrarPopup("Login Feito com sucesso!");
        }
        else
        {
            if(usuario == dados.usuario)
                mostrarPopup("Senha inválida.");
            else
                mostrarPopup("Usuário não encontrado.");
        }
    } else {
        mostrarPopup("Usuário ou senha inválido!");
    }

    return false;
}

function validarFormularioCadastro(e) {
    
    var usuarioValido = verificarUsuario(document.getElementById("newUsername"));
    var senhaValida = verificarSenha(document.getElementById("newPassword"));
    var nomeValido = verificarNome(document.getElementById("fullName"));
    var emailValido = verificarEmailCadastro(document.getElementById("email"));

    if (usuarioValido && senhaValida && nomeValido && emailValido) {
        mostrarPopup("Casdastro feito com sucesso!");
        var dados = { 
            nome: document.getElementById("fullName").value, 
            senha: document.getElementById("newPassword").value,
            email: document.getElementById("email").value,
            usuario: document.getElementById("newUsername").value
        };

        salvarEmCache("dadoUsuario", dados);

    } else {
        mostrarPopup("Casdastro com informações inválidas!");
    }

    return false;
}

function mostrarPopup(mensagem) {
    
    var popupContainer = document.querySelector(".popup-container-footer");
    if(!popupContainer)
    {
        popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container-footer');
    }


    popupContainer.innerHTML = `
        <div class="popup-content-footer">
            <p>${mensagem}</p>
            <button class="popup-button-footer" onclick="fecharPopup()">Fechar</button>
        </div>
    `;

    document.body.appendChild(popupContainer);

    setTimeout(function () {
        popupContainer.style.display = "block";
        popupContainer.style.opacity = "1";

    }, 10);
}

function salvarEmCache(chave, valor) {
    if (typeof(Storage) !== "undefined") {
        valor = JSON.stringify(valor);
        localStorage.setItem(chave, valor);
    }
}

function obterDoCache(chave) {
    var valor = localStorage.getItem(chave);
    return JSON.parse(valor);
}