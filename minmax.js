//Minimax Algorithm

let score = {
  X: 100,
  O: -100,
  tie: 0
};

//Allows AI to chose the best move for its next move
function bestMove() {
    let bestChoice = -Infinity;
    let move;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, 0, false);
          board[i][j] = '';
          if (score > bestChoice) {
            bestChoice = score;
            move = { i, j };
          }
        }
      }
    }
    board[move.i][move.j] = ai;
    player = human;
  }
  
  
  function minimax(board, depth, maximize) {
    let result = winner();
    if (result !== null) {
      return score[result];
    }
  
    if (maximize) {
      let bestChoice = -Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = ai;
            let score = minimax(board, depth + 1, false);
            board[i][j] = '';
            bestChoice = max(score, bestChoice);
          }
        }
      }
      return bestChoice;
    } else {
      let bestChoice = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == '') {
            board[i][j] = human;
            let score = minimax(board, depth + 1, true);
            board[i][j] = '';
            bestChoice = min(score, bestChoice);
          }
        }
      }
      return bestChoice;
    }
  }

