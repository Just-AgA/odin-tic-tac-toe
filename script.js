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


