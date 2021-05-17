let array2D = [
  [1, 2, 3], [4, 5, 6,], [7, 8]
];

console.log(array2D.reduce( (flat, current) => {
  return flat.concat(current);
}, []));

// -> [1, 2, 3, 4, 5, 6, 7, 8]