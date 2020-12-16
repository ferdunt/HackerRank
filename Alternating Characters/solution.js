function alternatingCharacters(text) {
  let counter = 0;
  // 💬 Loop each letter in text from last to the first
  for (let i = text.length - 1; i >= 0; i--) {
    // 💬 Get the last 2 letters
    const first = text[i];
    const second = text[i - 1];

    // 💬 If two consecutive letters are equal increase counter by 1
    if (first === second) counter++;
  }

  return counter;
}

const result = alternatingCharacters('AAABBB');
console.log(result); // 🐣 4
