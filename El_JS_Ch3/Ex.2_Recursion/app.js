const isEven = num => {
  num = Math.abs(num);
  let status;
  if( num == 0) status =  true;
  else if ( num == 1) status = false;
  else status = isEven(num - 2);
  return status; 
}

console.log(isEven(50)); // -> true
console.log(isEven(75)); // -> false
console.log(isEven(-1)); // -> false