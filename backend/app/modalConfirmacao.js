export default function criarModalConfirmacao(callbackConfirmar) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = 'modal-confirmacao';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'modalLabel');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Você está enviando uma publicação anônima</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Tem certeza que deseja publicar como anônimo?</p>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="naoMostrarNovamente">
                        <label class="form-check-label" for="naoMostrarNovamente">Não mostrar novamente</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" id="btn-confirmar">Confirmar</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const bsModal = new bootstrap.Modal(modal);

    bsModal.show();

    document.getElementById('btn-confirmar').addEventListener('click', () => {
        const naoMostrarNovamente = document.getElementById('naoMostrarNovamente').checked;

        if (naoMostrarNovamente) {
            sessionStorage.setItem('confirmacaoAnonimo', 'false');
        }

        callbackConfirmar();
        bsModal.hide();
        document.body.removeChild(modal);
    });

    document.querySelector('.btn-secondary').addEventListener('click', () => {
        bsModal.hide();
        document.body.removeChild(modal);
    });
}
