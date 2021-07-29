const box = {
  locked: true,
  unlock() { this.locked = false;},
  lock() { this.locked = true;},
  _content: [],
  get content() {
    if(this.locked == true) throw new Error("Content is locked!");
    return this._content;
  }
};

function withBoxUnlocked ( body ) {
  let locked = box.locked;
  if(!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}

// Testing

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked); // -> true