const usuarios = [
    {
        email: 'lucas@gmail.com',
        user: 'Lucas',
        pass: '123'
    },
    {
        email: 'hugo@gmail.com',
        user: 'Hugo',
        pass: '123'
    },
    {
        email: 'thalles@gmail.com',
        user: 'Thalles',
        pass: '123'
    },
    {
        email: 'marcos@gmail.com',
        user: 'Marcos',
        pass: '123'
    },
    {
        email: 'caio@gmail.com',
        user: 'Caio',
        pass: '123'
    },
    {
        email: 'mylena@gmail.com',
        user: 'Mylena',
        pass: '123'
    },
]

let botao = document.getElementById('btnlogin');

botao.addEventListener('click', function logar(){
    let pegaEmail = document.getElementById('login').value;
    let pegaSenha = document.getElementById('password').value;
    let validaLogin = false;

    document.querySelector('#form').addEventListener('submit', function(event) {
        event.preventDefault();
    });

    for(let i in usuarios){
        if(pegaEmail == usuarios[i].email && pegaSenha == usuarios[i].pass){
            validaLogin = true;

            sessionStorage.setItem('usuarioLogado', usuarios[i].user);
            sessionStorage.setItem('sair', '<li><button class="dropdown-item" id="leave">Sair</button></li>');
            break;
        }
    }

    if(validaLogin){
        window.location.href = 'index.html';
    } else {
        let alerta = document.createElement('div');
        alerta.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        alerta.setAttribute('role', 'alert');
        alerta.innerHTML = `
        <strong>Erro!</strong> Email ou senha inválidos. 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        let reference = document.querySelector('#title')

        let existingAlert = document.querySelector('.alert.alert-danger');

        if (!existingAlert || existingAlert.innerHTML !== alerta.innerHTML) {
            reference.insertAdjacentElement('afterend', alerta);
        }
    }
});
