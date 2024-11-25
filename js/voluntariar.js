if(document.querySelector('#voluntary')) {
    document.querySelector('#voluntary').addEventListener('click', () => {
        window.location.href = 'voluntariar.html'
    })
}

async function showState() {
    const resp = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    const data = await resp.json()
    const select = document.querySelector('#state')

    data.map(obj => {
        select.innerHTML += `<option value="${obj.sigla}">${obj.nome}</option>`
    }) 
}

async function showCity() {
    const state = document.querySelector('#state').value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
    const resp = await fetch(url)
    const data = await resp.json()
    const select = document.querySelector('#city')

    data.map(obj => {
        select.innerHTML += `<option value="${obj.nome}">${obj.nome}</option>`
    })
}


document.addEventListener('DOMContentLoaded', () => {
    showState();
    document.querySelector('#state').addEventListener('change', showCity);
});


console.log('teste')