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

    this.content = this.content.filter( v => v !== value)
    return true;
  }

  static from(collection) {
    let group = new Group();

    for(let element of collection) {
      group.add(element);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
    this.length = group.content.length;
  }

  next() {
    if(this.index == this.length) return {done: true}
    let value = {
      value: this.group.content[this.index],
      index: this.index,
      done: false

    }

    this.index++;
    return {value, done: false}
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

const setOne = Group.from('Ahmed');
console.log(setOne.content);

// remember to use for/of when testing
for(let member of setOne) {
  console.log(member);
}