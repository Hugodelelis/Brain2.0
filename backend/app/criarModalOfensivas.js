function criarModalOfensivas() {
    // Criação da estrutura do modal
    const modalHTML = `
        <div class="modal fade" id="modalOfensivas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Alerta!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        O texto contém palavras impróprias ou repetições excessivas de caracteres.
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="clearText" class="btn btn-secondary" data-bs-dismiss="modal">Limpar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inserir o modal no DOM se ainda não existir
    if (!document.getElementById('modalOfensivas')) {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Adiciona evento ao botão "Limpar" para esvaziar o campo de texto
    document.getElementById('clearText').addEventListener('click', () => {
        document.getElementById("conteudo").value = "";
    });

    // Exibe o modal
    const modal = new bootstrap.Modal(document.getElementById('modalOfensivas'));
    modal.show();
}

export default criarModalOfensivas;
