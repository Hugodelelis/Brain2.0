let count = localStorage.getItem('accessCount') || 0;

count++;

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

localStorage.setItem('accessCount', count);

document.getElementById('access-counter').innerHTML = formatNumber(count);