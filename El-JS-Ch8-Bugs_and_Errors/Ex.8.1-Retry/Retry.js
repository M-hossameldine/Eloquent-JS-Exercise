class MultiplicatorUnitFailure extends Error {}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function primitiveMultiply (num1, num2) {
  if(Math.random() < 0.2) {
    return num1 * num2;
  } else {
    throw new MultiplicatorUnitFailure("klunk!");
  }
}

function reliableMultiply () {
  let num1 = prompt("Enter 1st number: ");
  let num2 = prompt("Enter 2nd number: ");
  for(;;) {
    try {
      return primitiveMultiply(num1, num2);     
    }catch (e) {
      if(e instanceof MultiplicatorUnitFailure) {
        console.log(e);
      } else {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply());