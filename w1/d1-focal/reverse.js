const args = process.argv;
let words = args.slice(2);
// console.log(words)

// for (let word of words) {
//   console.log(word.length);
// }

const reverseWords = function() {
  let reversedString = "";
  for (let word of words) {
    for (let i = word.length - 1; i >= 0; i--) {
      let letter = `${word[i]}`;
      reversedString += letter;
    }
    reversedString += "\n";
  }
  console.log(reversedString);
};

console.log(reverseWords());