
function chessBoard(cols, rows) {
  let rowPattern = [];
  for(let rNum = 0; rNum < rows; rNum++) {    
    for (let cNum = 0; cNum < cols; cNum++) {
      if((rNum % 2 == 0 && cNum % 2 == 0) || (rNum % 2 != 0 && cNum % 2 !=0)) {
        rowPattern[cNum] = ' ';
      } else {
        rowPattern[cNum] = '#'
      }
    }
    console.log(rowPattern.join(''));
  }
}

chessBoard(8, 8)