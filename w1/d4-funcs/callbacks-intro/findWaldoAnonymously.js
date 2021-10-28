const findWaldo = function(names, found) {
  names.forEach((element, index) => {
    if (element === "Waldo") {
      found(index);   // execute callback
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index: ${index}.`);
});