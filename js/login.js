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
    } else {
        console.warn('Elemento com ID #title não encontrado.');
    }

    setTimeout(() => {
        if (document.body.contains(alerta)) {
            alerta.remove();
        }
    }, 5000);
}

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
            sessionStorage.setItem('usuarioLogado', usuarioEncontrado.user);
            sessionStorage.setItem('sair', '<li><button class="dropdown-item" id="leave">Sair</button></li>');
            window.location.href = 'index.html';
        } else {
            exibirAlerta('danger', 'Email ou senha inválidos.');
        }
    });
}
