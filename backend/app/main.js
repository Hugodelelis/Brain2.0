import ui from './ui.js';
import criarModalAlerta from './criarModalAlert.js';
import criarModalConfirmacao from './modalConfirmacao.js';
import criarModalOfensivas from './criarModalOfensivas.js';
import criarModal from './criarModalComentario.js';

document.addEventListener("DOMContentLoaded", () => {
    const formularioPost = document.getElementById("formMensagem");
    const btnAnonimo = document.getElementById("btn-anonimo");
    const btnPerfil = document.getElementById("btn-perfil");
    const iconePerfil = document.getElementById("usuario-imagem");
    const iconeUsuario = document.querySelector('.icone-user');
    const usuarioImagem = sessionStorage.getItem("usuarioImagem");

    // Verifica se o usuário está logado
    const usuarioLogado = sessionStorage.getItem('usuarioEstaLogado') === 'true';

    btnPerfil.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    configurarImagemPerfil(iconePerfil, iconeUsuario, usuarioImagem, usuarioLogado);

    formularioPost?.addEventListener("submit", (event) => manipularSubmissaoFormulario(event, btnAnonimo, usuarioLogado));

    if (btnAnonimo) {
        configurarIconeAnonimo(btnAnonimo);
        btnAnonimo.addEventListener("click", (event) => toggleAnonimo(event, btnAnonimo));
    }
    const btnComentarios = document.getElementById('btnComentarios');
    if (btnComentarios) {
      btnComentarios.addEventListener('click', () => {
            criarModal();
      });
    }

});


// Manipulação do envio do formulário de postagem
function manipularSubmissaoFormulario(event, btnAnonimo, usuarioLogado) {
    event.preventDefault();

    if (!usuarioLogado) {
        criarModalAlerta("Por favor, faça login para publicar uma mensagem.");
        return;
    }

    const content = document.getElementById("conteudo").value.trim();
    if (!content) {
        alert("A mensagem não pode estar vazia.");
        return;
    }

    // Detecção de caracteres repetidos
    const repeatedCharPattern = /(.)\1{2,}/;
    if (repeatedCharPattern.test(content)) {
        criarModalOfensivas();
        return;
    }

    const anonimo = btnAnonimo.value === "true";
    if (anonimo && sessionStorage.getItem('confirmacaoAnonimo') !== 'false') {
        criarModalConfirmacao(() => enviarPublicacao(content, btnAnonimo));
    } else {
        enviarPublicacao(content, btnAnonimo);
    }
}

// Função para enviar a publicação
function enviarPublicacao(content, btnAnonimo) {
    const autor = (btnAnonimo.value === "true") ? "Anônimo" : sessionStorage.getItem("usuarioLogado");
    const autorImagem = sessionStorage.getItem("usuarioImagem") || "src/assets/imgs/user-anonimo.png";

    const novoPost = {
        id: Date.now(), // Usa o timestamp como ID único
        content: content,
        autor: autor,
        anonimo: btnAnonimo.value === "true",
        likes: 0,
        comentarios: 0,
        autorImagem: autorImagem,
    };

    ui.addMensagem(novoPost);

    limparFormulario();
}


// Alterna o modo anônimo ao enviar
function toggleAnonimo(event, btnAnonimo) {
    event.preventDefault();
    const anonimo = btnAnonimo.value === "true";
    const icon = btnAnonimo.querySelector('i');
    btnAnonimo.value = anonimo ? "false" : "true";

    if (icon) {
        icon.classList.toggle("bi-eye-slash", !anonimo);
        icon.classList.toggle("bi-eye", anonimo);
    }
}

// Configura o icone de modo anonimo
function configurarIconeAnonimo(btnAnonimo) {
    const anonimo = btnAnonimo.value === "true";
    const icon = btnAnonimo.querySelector('i');

    if (icon) {
        icon.classList.toggle('bi-eye-slash', anonimo);
        icon.classList.toggle('bi-eye', !anonimo);
    }
}

// Configura a imagem de perfil
function configurarImagemPerfil(iconePerfil, iconeUsuario, usuarioImagem, usuarioLogado) {
    if (!iconePerfil || !iconeUsuario) {
        console.warn("Elementos de perfil não encontrados no DOM.");
        return;
    }

    if (usuarioLogado) {
        if (usuarioImagem) {
            iconePerfil.src = usuarioImagem;
            iconePerfil.style.display = 'block';
            iconeUsuario.style.display = 'none';
        } else {
            iconePerfil.style.display = 'none';
            iconeUsuario.style.display = 'block';
        }
    } else {
        iconePerfil.style.display = 'none';
        iconeUsuario.style.display = 'grid';
    }
}

// Função para limpar o conteúdo do formulario
function limparFormulario() {
    const conteudoInput = document.getElementById("conteudo");
    if (conteudoInput) conteudoInput.value = "";
}

// Botão para limpar o formulário manualmente
const btnRefazer = document.getElementById('btn-refazer');
btnRefazer?.addEventListener('click', limparFormulario);
