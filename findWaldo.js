let findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
    
      found(i);   // execute callback
      
    }
  }
}

let actionWhenFound = function(i) {
  console.log(`Found at index ${i}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);






