function hackerrankInString(text) {
  const originalWord = 'hackerrank';
  let newWord = '';

  // 💬 Loop the original word
  for (let i = 0; i < originalWord.length; i++) {
    const originalLetter = originalWord[i];
    // 💬 Loop the 'text'
    for (let j = 0; j <= text.length; j++) {
      // 💬 If there is no text return NO
      if (text.length === 0) return 'NO';

      // 💬 Check each letter to match with the original word
      const currentLetter = text[j];
      if (originalLetter === currentLetter) {
        newWord += currentLetter;
        text = text.slice(1);
        break;
      } else {
        text = text.slice(1);
      }

      // 💬 Decrease by 1 'j'
      j--;
    }
  }

  return originalWord === newWord ? 'YES' : 'NO';
}

const result = hackerrankInString('hereiamstackerrank');
console.log(result); // 🐣 YES
