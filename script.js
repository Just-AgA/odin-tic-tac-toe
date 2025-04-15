const cells = document.querySelectorAll('.cell');
const resultDiv = document.querySelector('#result');
const resetButton = document.querySelector('#reset-button');
const turnStatus = document.querySelector('#turn-status');

// Track the board state
let board = ['', '', '', '', '', '', '', '', '']; 
let currentPlayer = 'X';
let gameActive = true; 

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleCellClick(event) {
  const cellIndex = event.target.id.split('-')[1];
  // Prevent overwrite or click after game ends
  if (board[cellIndex] !== '' || !gameActive) return; 

  board[cellIndex] = currentPlayer; 
  // Display current player's mark
  event.target.textContent = currentPlayer; 

  checkWinner();

  // Switch player and update turn status
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  turnStatus.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && (board[a] === board[b]) && (board[a] === board[c])) {
      gameActive = false; 
      resultDiv.textContent = `Player ${currentPlayer} Wins!`; 
      turnStatus.textContent = '';
      return;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    resultDiv.textContent = 'It\'s a Draw!';
    turnStatus.textContent = ''; 
  }
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', '']; 
  currentPlayer = 'X'; 
  gameActive = true;

  resultDiv.textContent = ''; 
  turnStatus.textContent = `Player ${currentPlayer}'s Turn`; 
  cells.forEach(cell => cell.textContent = ''); 
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
