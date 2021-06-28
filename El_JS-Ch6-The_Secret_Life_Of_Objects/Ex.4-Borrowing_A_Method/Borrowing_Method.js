let map = {one: true, two: true, hasOwnProperty: true}

console.log(Object.hasOwnProperty.call(map, 'one'));   // -> true
console.log(Object.hasOwnProperty.call(map, 'three')); // -> false 
console.log(map.hasOwnProperty('one')); // -> TypeErro: map.hasOwnProperty is not a function