const profissionaisPorCidade = {
    "Volta Redonda": [
        {
            nome: "Paula",
            profissao: "Psicóloga",
            horario: "07h às 19h",
            imagem: "assets/imgs/profissionais/p3.svg"
        },
        {
            nome: "Carlos",
            profissao: "Psicólogo",
            horario: "08h às 18h",
            imagem: "assets/imgs/profissionais/p2.png"
        }
    ],
    "Barra Mansa": [
        {
            nome: "Fernanda",
            profissao: "Psicóloga",
            horario: "09h às 17h",
            imagem: "assets/imgs/profissionais/p1.png"
        }
    ],
};


async function search() {
    const cep = document.querySelector('#search').value
    sessionStorage.setItem('cep', cep)

    if(cep.length === 9) {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await resp.json()
        return data.localidade
    } 
}

async function showCity() {
    const city = await search()
    if(city === undefined) {
        return document.querySelector('.city').innerHTML = ''
    } 

    document.querySelector('.city').innerHTML = `${city}`
}

async function showProfessionals() {
    const city = await search()
    const professionals = profissionaisPorCidade[`${city}`]
    const write = document.querySelector('.professionals')
    const cep = document.querySelector('#search').value
    write.innerHTML = ''

    if(city == undefined) {
        return write.innerHTML = '<span class="error">Aviso: CEP inválido!</span>'
    }

    if(!(city in profissionaisPorCidade)) {
        return write.innerHTML = '<span class="error">Aviso: Não possuimos profissionais cadastrados nessa área!</span>'
    }

    professionals.map(prof => {
        write.innerHTML += `
            <div class="professionals-container animate__animated animate__bounceIn">
                <img src="${prof.imagem}" alt="${prof.nome}">
                <div class="professional-content">
                <h2>${prof.nome}</h2>
                <p>Cidade: <span>${city}</span></p>
                <p>Atuação: <span>${prof.profissao}</span></p>
                <p>Horário: <span>${prof.horario}</span></p>

                <button class="a-btn">Ver Detalhes</button>
            </div>
            </div>
        `
    });
}

async function loading () {
    await search()
    showCity()
    showProfessionals()
}

document.querySelector('#search-btn').addEventListener('click', () => {
    loading()
    console.log(window.location.pathname)

    if(window.location.pathname !== '/profissionais.html') window.location.href = 'profissionais.html';
})

document.querySelector('#search').addEventListener('keydown', (e) => {
    if(window.location.pathname !== '/profissionais.html' && e.key === 'Enter'){
        window.location.href = 'profissionais.html';
    } 

    if(e.key === 'Enter') {
        loading()
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const cep = sessionStorage.getItem('cep');
    if(cep && window.location.href.includes('profissionais.html')) {
        document.querySelector('#search').value = cep;
        loading()
    }

    const write = document.querySelector('.professionals')
    write.innerHTML = ''
    write.innerHTML = '<span class="alert">Aviso: Digite um CEP para mostrar os profissionais!</span>'
});
