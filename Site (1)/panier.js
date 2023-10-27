

document.addEventListener('DOMContentLoaded', function() {
    var questions = document.querySelectorAll('.accordion h3');

    // Initialisation : ajouter les symboles
    questions.forEach(function(question) {
        var symbol = document.createElement('span');
        symbol.className = 'accordion-symbol';
        symbol.textContent = '+';
        question.appendChild(symbol);
    });

    // Gestion du clic : ouvrir/fermer et changer le symbole
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var symbol = this.querySelector('.accordion-symbol');
            
            if (content.style.display === 'block') {
                content.style.display = 'none';
                symbol.textContent = '+';
            } else {
                content.style.display = 'block';
                symbol.textContent = '—';
            }
        });
    });
});
