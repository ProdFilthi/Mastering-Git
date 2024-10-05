const cells = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restartBtn");
let currentPlayer = "X";
let gameOver = false;
let moveCount = 0;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWin() {
  let isWinner = false;
  winningCombinations.forEach((combination) => {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      alert(`${currentPlayer} is the winner`);
      gameOver = true;
      isWinner = true;
    }
  });
  if (!isWinner && moveCount === 9) {
    alert(`It's a draw!`);
    gameOver = true;
  }
}

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!gameOver && cell.textContent === "") {
      cell.textContent = currentPlayer;
      moveCount++;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

restartBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "X";
  gameOver = false;
  moveCount = 0;
});
