function loopingTriangle(rowNum) {
  let numberSign = '';
  for(let i =0; i < rowNum; i++) {
    numberSign += '#';
    console.log(numberSign);
  }
}

loopingTriangle(7);