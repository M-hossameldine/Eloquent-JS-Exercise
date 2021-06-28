class Group {
  constructor() {
    this.content = [];
  }

  has(value) {
    return this.content.includes(value);
  }

  add(value){
    if(!this.has(value)){
      this.content.push(value);
    }
  }

  delete(value){

    this.content = this.content.filter( v => v != value)
    
    // Another method
    /*
     if(this.content.includes(value)){
       this.content.splice(this.content.indexOf(value), 1);
     }
    */

    return true;
  }

  static from(collection) {
    let group = new Group();
    // note
    /*
      forEach works properly only with array or any node-list and doesn't work with strings
      sor for/of is the right choice
    */
    for(let element of collection) {
      group.add(element);
    }
    return group;
  }
}

// Testing
const mySet = new Group();
mySet.add(1);
mySet.add(2);
console.log(mySet.content);     // -> [1, 2]
console.log(mySet.has(1));      // -> true
console.log(mySet.has(3));      // -> false
console.log(mySet.delete(2));   // -> ture
console.log(mySet.content);     // -> [1]

const setTwo = Group.from([1, 2, 3]);
console.log(setTwo.content);     // -> [1, 2, 3]
