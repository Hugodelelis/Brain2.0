let count = localStorage.getItem('accessCount') || 0;

count++;

localStorage.setItem('accessCount', count);

document.getElementById('access-counter').innerText = count;