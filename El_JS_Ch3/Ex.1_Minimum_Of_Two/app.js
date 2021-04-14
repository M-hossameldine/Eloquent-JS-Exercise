
const minOfTwoV1 = function (num1, num2) {
  if(num1 < num2) return num1;
  else return num2;
}
console.log(minOfTwoV1(9, 8)); // -> 8

const minOfTwoV2 = (num1, num2) => {
  return (num1 < num2)?num1:num2;
}
console.log(minOfTwoV2(7, 5)); // -> 5