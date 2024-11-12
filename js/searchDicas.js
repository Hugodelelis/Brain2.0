const searchInput = document.getElementById('search');
const dicas = document.querySelectorAll('h3');
const container = document.querySelector('.container-dicas')
const errorMessage = document.getElementById('error-message');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    let found

    dicas.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        if (text.includes(filter)) {
            item.parentElement.classList.remove('hidden');
            found = true;
        } else {
            item.parentElement.classList.add('hidden');
        }
    });

    if (!found) {
        errorMessage.classList.remove('hidden');
        container.style.display = 'block' 
    } else {
        container.style.display = 'grid' 
        errorMessage.classList.add('hidden');
    }
});