function criarModalAlerta() {
    const modalHTML = `
      <div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="alertModalLabel">Alerta</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Você precisa estar logado para postar!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="button" class="btn btn-primary" id="btnLogin">Fazer Login</button>
            </div>
          </div>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  
    const modal = new bootstrap.Modal(document.getElementById('alertModal'));
  
    modal.show();
  
    document.getElementById('btnLogin').addEventListener('click', () => {
      window.location.href = 'login.html'
    });
  }
  
export default criarModalAlerta;
  