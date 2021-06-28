class Vec {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vecTwo) {
    return {x: this.x + vecTwo.x, 
            y: this.y + vecTwo.y,
    }
  }
  
  minus(vecTwo) {
    return {x: this.x - vecTwo.x,
            y: this.y - vecTwo.y,
    }
  }
  get getLength () {
    return Math.hypot(this.x, this.y)
  }
}



console.log(new Vec(1, 1).plus(new Vec(2,2))); // -> {x: 3, y: 3}
console.log(new Vec(1, 1).minus(new Vec(2,2))); //-> {x: -1, y: -1`}
console.log(new Vec(2, 3).getLength); // -> 3.6056
