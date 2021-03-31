/* 
  Exercise Notes:
  * Print number from 1 to 100
  * Numbers devisable by 3             //-> "Fizz"
  * Numbers divisable by 5 (and not 3) //-> "Buzz"
  * Number divisalbe by 3 && 5         //-> "FizzBuzz"
*/

function printFizzBuzz() {
  let count = 1;

  while(count <= 100) {
    
    if(count % 3 == 0 && count % 5 != 0 ) {
      console.log("Fizz");
    } else if(count % 5 == 0 && count % 3 != 0 ) {
      console.log("Buzz");
    } else if(count % 3 == 0 && count % 5 == 0 ) {
      console.log("FizzBuzz");
    } else {
      console.log(count);
    }

    count++;
  }

}

printFizzBuzz();