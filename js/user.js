window.addEventListener('load', function() {
    let usuarioLogado = sessionStorage.getItem('usuarioLogado');
    let sair = this.sessionStorage.getItem('sair')

    if (usuarioLogado) {
        document.querySelectorAll('#user').forEach(function(element) {
            element.innerHTML = usuarioLogado;
        });

        document.querySelectorAll('#leave').forEach(function(element) {
            element.innerHTML = sair;
        });

        document.querySelector('#leave').addEventListener('click', function() {

            sessionStorage.clear();
            
            window.location.href = 'login.html'; 
        });
    }
});