
// Count Uppercase 'B'
const countBs = str => {
  let Bcount = 0;
  for(let i = 0; i< str.length; i++) {
    if(str[i] == 'B') Bcount++;
  }
  return Bcount;
}

console.log(countBs('Bbf')); // -> 1

// Count any letter
const countChar = (str, char) => {
  let charCount = 0;
  str = str.split('');
  str.forEach( thisChar => {
    if(thisChar == char) charCount++;
  });

  return charCount;
}

console.log(countChar('hoss', 's')); // -> 2