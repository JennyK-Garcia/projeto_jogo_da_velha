let jogador = 'X';
let fimdejogo = false;

function Inicio() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            Movimento(cell);
            cell.classList.add('rotate');
        });
    });

    // Adicione um evento de clique ao botão de recarregamento
    const refreshButton = document.querySelector('.attpagina');
    if (refreshButton) {
        refreshButton.addEventListener('click', function() {
            location.reload(); // Recarrega a página quando o botão é clicado
        });
    }
}

function Movimento(cell) {
    if (!fimdejogo && cell.innerHTML === '') {
        cell.innerHTML = jogador;
        cell.classList.add(jogador === 'X' ? 'player-x' : 'player-o'); // Adiciona a classe de estilo
        jogador = jogador === 'X' ? 'O' : 'X';
        verganhador();
    }
}

function verganhador() {
    const cells = document.querySelectorAll('.cell');
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            document.getElementById('message').textContent = `Jogador ${cells[a].innerHTML} ganhou!`;
            fimdejogo = true;
            return;
        }
    }

    const isTie = [...cells].every(cell => cell.innerHTML);
    if (isTie) {
        document.getElementById('message').textContent = 'Empate!';
        fimdejogo = true;
    }
}

// Inicialize o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    Inicio();
});
