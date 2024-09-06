document.querySelectorAll('#curtir').forEach(button => {
    button.addEventListener('click', () => {    
        button.classList.toggle('red');
    });
});