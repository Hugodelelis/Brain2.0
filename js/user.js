window.addEventListener('load', () => {
    let usuarioLogado = sessionStorage.getItem('usuarioLogado');
    let sair = sessionStorage.getItem('sair');
    let btnVoluntary = document.getElementById('voluntary')

    if(!usuarioLogado) {
        btnVoluntary.disabled = true
    }

    if (usuarioLogado) {
        document.querySelectorAll('#user').forEach(function(element) {
            element.innerHTML = usuarioLogado;
        });

        document.querySelectorAll('#login-drop').forEach(function(element) {
            element.innerHTML = `
            ${sair}
            <li><a class="dropdown-item" href="editar.html">Editar</a></li>
            `;
        });

        document.querySelector('#leave').addEventListener('click', function() {
            sessionStorage.setItem('usuarioLogado', '');

            document.querySelectorAll('#user').forEach(function(element) {
                element.innerHTML = '';
            });

            document.querySelectorAll('#login-drop').forEach(function(element) {
                element.innerHTML = '';
            });

            window.location.href = 'login.html'; 
        });
    }
});
