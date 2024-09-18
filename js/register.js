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
    referencia.insertAdjacentElement('afterend', alerta);

    setTimeout(() => {
        if (document.body.contains(alerta)) {
            alerta.remove();
        }
    }, 5000);
}

function registrarUsuario(nome, email, senha, confirmarSenha) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (!nome || !email || !senha || !confirmarSenha) {
        exibirAlerta('danger', 'Preencha todos os campos.');
        return false;
    }

    if (senha !== confirmarSenha) {
        exibirAlerta('danger', 'As senhas não coincidem.');
        return false;
    }

    for (let usuario of usuarios) {
        if (usuario.email === email) {
            exibirAlerta('danger', 'Este email já está registrado.');
            return false;
        }
    }

    usuarios.push({ email: email, user: nome, pass: senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    exibirAlerta('success', 'Redirecionando para o login...');

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

let botaoRegistro = document.getElementById('btnRegister');
botaoRegistro.addEventListener('click', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nomeRegister').value;
    let email = document.getElementById('emailRegister').value;
    let senha = document.getElementById('passwordRegister').value;
    let confirmarSenha = document.getElementById('confirmPassword').value;

    registrarUsuario(nome, email, senha, confirmarSenha);
});
