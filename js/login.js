const usuarios = [
    {
        login: 'Lucas',
        pass: 'lucaselindo'
    },
    {
        login: 'Hugo',
        pass: 'hugoefeio'
    },
    {
        login: 'Thalles',
        pass: 'thallesefeio'
    },
    {
        login: 'Marcos',
        pass: 'marcosefeio'
    },
    {
        login: 'Caio',
        pass: 'caioefeio'
    },
    {
        login: 'Mylena',
        pass: 'mylenaelinda'
    },
]

let botao = document.getElementById('btnlogin');

botao.addEventListener('click', function logar(){
    let pegaUsuario = document.getElementById('login').value
    let pegaSenha = document.getElementById('password').value
    let validaLogin = false

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }else{
            validaLogin = false
        }
    }

    if(validaLogin == true){
        alert ('ok')
    }else{
        alert('erro')
    }
    
})

