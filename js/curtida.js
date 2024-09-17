document.querySelectorAll('#curtir').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('red');

        const likeCountElement = button.querySelector('.like-count');
        let likeCount = parseInt(likeCountElement.textContent);
        
        if (button.classList.contains('red')) {
            likeCount++;
        } else {
            likeCount--;
        }
        
        likeCountElement.textContent = likeCount;
    });
});