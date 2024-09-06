// Pega o contador do localStorage ou inicia com 0
let count = localStorage.getItem('accessCount') || 0;

// Incrementa o contador
count++;

// Atualiza o valor do contador no localStorage
localStorage.setItem('accessCount', count);

// Mostra o valor do contador na página
document.getElementById('access-counter').innerText = count;