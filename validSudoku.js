var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
      let row = new Set();
      let column = new Set();
      let box = new Set();
  
      for (let j = 0; j < 9; j++) {
        // Check for duplicates in rows
        if (board[i][j] !== '.' && row.has(board[i][j])) return false;
        row.add(board[i][j]);
  
        // Check for duplicates in columns
        if (board[j][i] !== '.' && column.has(board[j][i])) return false;
        column.add(board[j][i]);
      }
    }
  
    for (let i = 0; i < 9; i++) {
      let box = new Set();
  
      for (let j = 0; j < 9; j++) {
        // Check for duplicates in boxes
        let rowIndex = 3 * Math.floor(i / 3);
        let columnIndex = 3 * (i % 3);
        let x = rowIndex + Math.floor(j / 3);
        let y = columnIndex + j % 3;
  
        if (board[x][y] !== '.' && box.has(board[x][y])) return false;
        box.add(board[x][y]);
      }
    }
  
    return true;
  };