function exibirAlerta(tipo, mensagem) {
    let alertaExistente = document.querySelector('.alert');
    if (alertaExistente) {
        alertaExistente.remove();
    }

    let alerta = document.createElement('div');
    alerta.classList.add('alert', `alert-${tipo}`, 'alert-dismissible', 'fade', 'show');
    alerta.setAttribute('role', 'alert');
    alerta.innerHTML = `
        <strong>${tipo === 'danger' ? 'Erro!' : 'Sucesso!'}</strong> ${mensagem}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    let referencia = document.querySelector('#title');
    if (referencia) {
        referencia.insertAdjacentElement('afterend', alerta);
    } else {
        console.warn('Elemento com ID #title não encontrado.');
    }

    setTimeout(() => {
        if (document.body.contains(alerta)) {
            alerta.remove();
        }
    }, 5000);
}

function inicializarUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const usuariosPreDefinidos = [
        { email: 'lucas@gmail.com', user: 'Lucas', pass: '123' },
        { email: 'hugo@gmail.com', user: 'Hugo', pass: '123' },
        { email: 'thalles@gmail.com', user: 'Thalles', pass: '123' },
        { email: 'marcos@gmail.com', user: 'Marcos', pass: '123' },
        { email: 'caio@gmail.com', user: 'Caio', pass: '123' },
        { email: 'mylena@gmail.com', user: 'Mylena', pass: '123' }
    ];

    usuarios = [...usuariosPreDefinidos, usuarios];
}

document.addEventListener('DOMContentLoaded', function() {
    inicializarUsuarios();
});

let botao = document.getElementById('btnlogin');

if (botao) {
    botao.addEventListener('click', function logar(event) {
        event.preventDefault();

        let pegaEmail = document.getElementById('login').value;
        let pegaSenha = document.getElementById('password').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        
        if (!pegaEmail || !pegaSenha) {
            exibirAlerta('danger', 'Preencha todos os campos!');
            return;
        }

        let usuarioEncontrado = usuarios.find(usuario =>
            usuario.email === pegaEmail && usuario.pass === pegaSenha
        );

        if (usuarioEncontrado) {
            sessionStorage.setItem('usuarioLogado', usuarioEncontrado.user);
            sessionStorage.setItem('sair', '<li><button class="dropdown-item" id="leave">Sair</button></li>');
            window.location.href = 'index.html';
        } else {
            exibirAlerta('danger', 'Email ou senha inválidos.');
        }
    });
}