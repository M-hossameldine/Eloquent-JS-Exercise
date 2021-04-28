
function range(start, end, step = start < end? 1: -1) {
  let numArray = [];
  if( step >= 0) {
    for(let i = start; i <= end; i += step) { numArray.push(i) }
  } else {
    for(let i = start; i >= end; i += step) numArray.push(i)
  }
  return numArray;
}

function sum (array) {
  let total = 0;
  for( let num of array) {
    total += num;
  }
  return total;
}

console.log(sum(range(2, 6, 2)))