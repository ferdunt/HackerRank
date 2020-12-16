function funnyString(text) {
  // 💬 Get the reversed text from original
  const textReversed = text.split('').reverse().join('');

  // 💬 Call checkFunny function for both texts
  const differenceText = checkFunny(text);
  const differenceTextReversed = checkFunny(textReversed);

  // 💬 Check if they are funny or not based on rules
  if (differenceText === differenceTextReversed) {
    return 'Funny';
  } else {
    return 'Not Funny';
  }
}

// 💬 Define a new function to evaluate each letter
function checkFunny(text) {
  // 💬 Convert the text into an array an each letter into an ascii
  const asciiText = text.split('').map(letter => letter.charCodeAt(0));
  let difference = [];

  // 💬 Loop the ascii numbers
  for (let i = 0; i < asciiText.length - 1; i++) {
    // 💬 Evaluate in pair and push it into a new array
    const first = asciiText[i];
    const second = asciiText[i + 1];
    difference.push(Math.abs(first - second));
  }

  // 💬 Convert the array into an string and return it
  return difference.join('');
}

const result = funnyString('lmnop');
console.log(result); // 🐣 "Funny"
