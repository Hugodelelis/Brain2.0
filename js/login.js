function exibirAlerta(tipo, mensagem) {
    let alertaExistente = document.querySelector('.alert');
    if (alertaExistente) {
        alertaExistente.remove();
    }

    let alerta = document.createElement('div');
    alerta.classList.add('alert', `alert-${tipo}`, 'alert-dismissible', 'fade', 'show');
    alerta.setAttribute('role', 'alert');
    alerta.innerHTML = ` 
        <strong>${tipo === 'success' ? 'Sucesso!' : 'Erro!'}</strong> ${mensagem} 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    let referencia = document.querySelector('#title');
    if (referencia) {
        referencia.insertAdjacentElement('afterend', alerta);
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
        { email: 'lucas@gmail.com', user: 'Lucas Corrêa', pass: '123', src: 'assets/users/u6.svg' },
        { email: 'hugo@gmail.com', user: 'Hugo de Lelis', pass: '123', src: 'assets/users/u1.svg' },
        { email: 'thalles@gmail.com', user: 'Thalles Jose', pass: '123', src: 'assets/users/u5.svg' },
        { email: 'marcos@gmail.com', user: 'Marcos Paulo', pass: '123', src: 'assets/users/u4.svg' },
        { email: 'caio@gmail.com', user: 'Caio Quintela', pass: '123', src: 'assets/users/u7.svg' },
        { email: 'mylena@gmail.com', user: 'Mylena', pass: '123' }
    ];

    if (usuarios.length === 0) {
        localStorage.setItem('usuarios', JSON.stringify(usuariosPreDefinidos));
    }
}

// Define o estado de logado como `false` ao carregar a página apenas se a chave não estiver definida
document.addEventListener('DOMContentLoaded', function() {
    inicializarUsuarios();
    if (!sessionStorage.getItem('usuarioEstaLogado')) {
        sessionStorage.setItem('usuarioEstaLogado', 'false');
    }
});

// Lógica para realizar login e alterar estado
let botaoLogin = document.getElementById('btnlogin');

if (botaoLogin) {
    botaoLogin.addEventListener('click', function(event) {
        event.preventDefault();

        let email = document.getElementById('login').value;
        let senha = document.getElementById('password').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        if (!email || !senha) {
            exibirAlerta('danger', 'Preencha todos os campos!');
            return;
        }

        let usuarioEncontrado = usuarios.find(usuario =>
            usuario.email === email && usuario.pass === senha
        );

        if (usuarioEncontrado) {
            // Se o login for bem-sucedido, atualiza o estado para `true`
            sessionStorage.setItem('usuarioImagem', usuarioEncontrado.src || '');
            sessionStorage.setItem('usuarioLogado', usuarioEncontrado.user);
            sessionStorage.setItem('sair', '<li><button class="dropdown-item" id="leave">Sair</button></li>');
            sessionStorage.setItem('usuarioEstaLogado', 'true');

            window.location.href = 'index.html';
        } else {
            exibirAlerta('danger', 'Email ou senha inválidos.');
        }
    });
}



