function criarModal() {
    const modalExistente = document.querySelector('.bd-example-modal-lg');
    if (modalExistente) {
        const modal = bootstrap.Modal.getInstance(modalExistente);
        modal.show(); 
        return;
    }
  const modalHTML = `
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
              <div class="modal-content">
                  <!-- Cabeçalho do Modal -->
                  <div class="modal-header">
                      <div class="post">
                          <div class="post-img">
                              <img src="src/assets/imgs/thallesjose.png" alt="">
                          </div>
                          <div class="post-content">
                              <div class="post-top">
                                  <h2><div class="mini-img"><img src="src/assets/imgs/thallesjose.png" alt=""></div>Thalles Jose da Silva Viana</h2>
                                  <div class="post-interaction">
                                      <button class="favoriteBtn"><i class="bi bi-heart"></i></button>
                                  </div>
                              </div>
                              <div class="post-text">
                                  <p>Se sentir ouvido já é um grande passo. Sinta-se à vontade para compartilhar o que está no seu coração, estamos aqui para apoiar uns aos outros.</p> 
                              </div>
                          </div>   
                      </div>
                  </div>
                  <!-- Corpo do Modal -->
                  <div class="modal-body">
                      <div class="comment-item">                           
                          <h3>Comentários</h3>

                          <div class="comment">
                              <div class="comment-img">
                                  <img src="src/assets/imgs/.png" alt="">
                              </div>
                              <div class="comment-content">
                                  <div class="comment-top">
                                      <h2><div class="mini-img"><img src="src/assets/imgs/hugo.png" alt=""></div>Hugo de Lelis</h2>
                                      <div class="comment-interaction">
                                          <button class="favoriteBtn"><i class="bi bi-heart"></i></button>
                                      </div>
                                  </div>
                                  <div class="comment-text">
                                      <p>Abertura sobre saúde mental é essencial. Sua reflexão me inspirou a buscar mais apoio. Obrigado por compartilhar! &#x1F331;&#x1F60A;</p> 
                                  </div>
                              </div>   
                          </div>

                          <div class="comment">
                              <div class="comment-img">
                                  <img src="src/assets/imgs/caioquintela.png" alt="">
                              </div>
                              <div class="comment-content">
                                  <div class="comment-top">
                                      <h2><div class="mini-img"><img src="src/assets/imgs/caioquintela.png" alt=""></div>Caio Quintela</h2>
                                      <div class="comment-interaction">
                                          <button class="favoriteBtn"><i class="bi bi-heart"></i></button>
                                      </div>
                                  </div>
                                  <div class="comment-text">
                                      <p>Concordo! Pedir ajuda é força, não fraqueza. Suas palavras me fizeram refletir. &#x1F4AC;&#x1F4AA;</p> 
                                  </div>
                              </div>   
                          </div>

                          <div class="comment">
                              <div class="comment-img">
                                  <img src="src/assets/imgs/lucascorrea.png" alt="">
                              </div>
                              <div class="comment-content">
                                  <div class="comment-top">
                                      <h2><div class="mini-img"><img src="src/assets/imgs/lucascorrea.png" alt=""></div>Lucas Corrêa</h2>
                                      <div class="comment-interaction">
                                          <button class="favoriteBtn"><i class="bi bi-heart"></i></button>
                                      </div>
                                  </div>
                                  <div class="comment-text">
                                      <p>Compartilhar é um alívio. Sua mensagem me motivou a cuidar melhor de mim mesmo. &#x2764;&#x1F64C;</p>
                                  </div>
                              </div>   
                          </div>

                          <!-- Formulário de comentário -->
                          <div class="comment-post-text-container">
                              <div class="comment-post-text">
                                  <form id="formComment">
                                      <div class="comment-post-textarea">
                                          <textarea name="" id="comentario" placeholder="Digite seu comentario..." ></textarea>
                                      </div>
                                      <div class="space-menu"></div>
                                      <div class="comment-post-btn">
                                          <button type="submit" title="Publicar" id="btn-publicar">Publicar</button>
                                      </div>
                                  </form>
                                  <aside class="comment-asidebar-text">
                                      <div class="btn-comment-asidebar-text">
                                          <button id="btn-perfil"><a href=""><i class="bi bi-person-circle"></i></a></button>
                                          <button id="btn-anonimo" value="true"><a href=""><i class="bi bi-eye-slash"></i></a></button>
                                          <button title="Refazer" id="btn-refazer"><i class="bi bi-trash"></i></button>
                                      </div>
                                  </aside>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- Rodapé do Modal -->
                  <div class="modal-footer">
                      <button type="button" class="btn-modal" data-bs-dismiss="modal">Fechar</button>
                  </div>
              </div>
          </div>
      </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

 
    const modalElement = document.querySelector('.bd-example-modal-lg');
    const modal = new bootstrap.Modal(modalElement);

    // Exibe o modal
    modal.show();


    modalElement.addEventListener('hidden.bs.modal', () => {
        modalElement.remove();
    });
}

export default criarModal;
