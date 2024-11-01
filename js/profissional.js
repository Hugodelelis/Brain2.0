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
            imagem: "assets/imgs/profissionais/p4.svg"
        }
    ],
    "Rio de Janeiro": [
        {
            nome: "Fernanda",
            profissao: "Psicóloga",
            horario: "09h às 17h",
            imagem: "assets/imgs/profissionais/p5.svg"
        }
    ],
    "São Paulo": [
        {
            nome: "Marcos",
            profissao: "Psicoterapeuta",
            horario: "10h às 16h",
            imagem: "assets/imgs/profissionais/p6.svg"
        }
    ]
};


async function search() {
    const cep = document.querySelector('#search').value
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await resp.json()

    return data.localidade
}

async function showCity() {
    const city = await search()

    document.querySelector('.city').innerHTML = `${city}`
}

async function showProfessionals() {
    const city = await search()
    console.log(profissionaisPorCidade[`${city}`])
}

async function loading () {
    await search()
    showCity()
    showProfessionals()
}

document.querySelector('#search-btn').addEventListener('click', () => {
    loading()
})


document.querySelector('#search').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{1,3})/, '$1-$2'); 
    }
    e.target.value = value;
});