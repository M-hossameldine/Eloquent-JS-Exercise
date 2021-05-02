let myList = { value: 1, rest: {
                value: 2, rest: {
                  value: 3, rest: null 
                }
              }
};

function arrayToList(array) {
  let list = null;
  for(let i = array.length -1; i >= 0; i--) {
    list = {value: array[i], rest: list}
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for(let node = list; node; node = list.rest) {
    array.push(node.value);
  }
  return array;
}

function append(list, value) {
  return {value, rest: list};
}

function nth(list, n) {
  let output;
  if(!list)  output = undefined;
  if(n == 0) output = list.value;
  if(n > 0)  output = nth(list.rest, n - 1);
  return output;
}

/*
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
*/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20