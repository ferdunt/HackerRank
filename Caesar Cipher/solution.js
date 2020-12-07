function caesarCipher(text, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let rotated = '';

  // 💬 Loop each letter in 's'
  for (let i = 0; i < text.length; i++) {
    const currentLetter = text[i].toLowerCase();
    // 💬 Check if it is a letter
    if (alphabet.includes(currentLetter)) {
      // 💬 Calculate with a formula
      const position = (alphabet.indexOf(currentLetter) + key) % 26;
      // 💬 Check if the original letter was a lower or upper case
      if (text[i] === text[i].toLowerCase()) {
        rotated += alphabet[position];
      } else {
        rotated += alphabet[position].toUpperCase();
      }
    } else {
      rotated += currentLetter;
    }
  }
  return rotated;
}

const result = caesarCipher('Hello', 2);
console.log(result); // 🐣 "Jgnnq"
