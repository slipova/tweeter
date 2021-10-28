const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  })
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}.`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);