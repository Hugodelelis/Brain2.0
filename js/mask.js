document.querySelector('#search').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2'); 
    }
    e.target.value = value;
});