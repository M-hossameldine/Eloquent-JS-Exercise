// Get the script of the passed character Unicode
function characterScript(code) {
  for(let script of SCRIPTS) {
    if(script.ranges.some( ([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// returns list contains the counted repetition for each of used scripts
function countBy(items, groupName) {
  let counts = []; // list of objects each object {name, count}
  for(let item of items) {
    let name = groupName(item);
    let known = counts.findIndex( c => c.name == name); 
    // Old Item: known >= 0 || New Item: known == -1

    if(known == -1) counts.push({name, count: 1});
      else counts[known].count++;  
  }
  return counts;
} 

function dominantDir(text) {
  let directions = countBy(text, c => {
      let script = characterScript(c.codePointAt(0));
      return script ? script.direction: "none";
    }).filter( ({name}) => name != "none");

  if(directions.length == 0) return "The text does not include known scripts.";
    return directions.reduce((current, next) => {
      return current.count > next.count? current: next;
    }).name;
}

console.log(dominantDir("Add محمد"));