window.addEventListener('load', () => {
    let usuarioLogado = this.sessionStorage.getItem('usuarioLogado');
    let sair = this.sessionStorage.getItem('sair')

    if (usuarioLogado) {
        document.querySelectorAll('#user').forEach(function(element) {
            element.innerHTML = usuarioLogado;
        });

        document.querySelectorAll('#login-drop').forEach(function(element) {
            element.innerHTML = sair;
        });

        document.querySelector('#leave').addEventListener('click', function() {

            sessionStorage.clear();
            
            window.location.href = 'login.html'; 
        });
    }
});