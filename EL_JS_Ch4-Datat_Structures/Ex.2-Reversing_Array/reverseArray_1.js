
// M-hossameldine - Solution
function reverseArray(arr) {
  console.log(arr)

  let newArr = []
  let L = arr.length;
  for(let i = 0; i< L; i++) {
    newArr.push(arr.pop());
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  console.log(arr);
  for(let i = 0; i < arr.length-1;i++) {
    arr.splice(i, 0, arr.pop())
  }
  return arr;
}

console.log(reverseArray([4,6,7])) 
// -> [7, 6, 4]

console.log(reverseArrayInPlace([5, 8, 9, 3, 6])); 
 // -> [6, 3, 9, 8, 5]


