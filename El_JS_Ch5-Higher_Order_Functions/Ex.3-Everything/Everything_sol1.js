
function everyWithLoop(array, predicate) {
  for( let value of array) {
    if(!predicate(value)) return false; 
  }

  return true;
}

function everyWithSome(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(everyWithLoop([1, 2, 3], n => n < 4))
// -> true

console.log(everyWithLoop([1, 2, 3], n => n < 3))
// -> false

console.log(everyWithSome([1, 2, 3], n => n < 2))
// -> false

