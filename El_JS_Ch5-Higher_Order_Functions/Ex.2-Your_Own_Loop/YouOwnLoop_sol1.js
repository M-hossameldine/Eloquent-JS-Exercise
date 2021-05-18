function loop(start, test, update, body) {
  for( let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(2, n => n >= 0, n => n - 1, console.log)
// -> 2 -> 1 -> 0