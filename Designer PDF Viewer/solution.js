function designerPdfViewer(h, word) {
  // 💬 Get the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // 💬 Get the position for each letter in alphabet
  let wordsPosition = word.split('').map(letter => alphabet.indexOf(letter));

  // 💬 Update the position with the array given in 'h'
  wordsPosition = wordsPosition.map(position => h[position]);

  // 💬 Get the maximum value in 'wordsPosition' array
  const highest = Math.max(...wordsPosition);

  // 💬 Calculate based on rules
  const total = word.length * highest;

  return total;
}

const positions = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  7,
];
const result = designerPdfViewer(positions, 'zaba');
console.log(result); // 🐣 28
