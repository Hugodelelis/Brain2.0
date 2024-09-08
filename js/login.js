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
            break;
        }
    }

    if(validaLogin){
        window.location.href = 'index.html';
    }else{
        alert('Erro: Usuário ou senha incorretos');
    }
});
