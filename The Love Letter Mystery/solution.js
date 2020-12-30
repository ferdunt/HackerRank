function theLoveLetterMystery(s) {
  let counter = 0;
  let operation = 0;
  // 💬 Create an array of letters
  const letters = s.split('');

  // 💬 Create an array of ascii values of each letter
  const ascii = letters.map(letter => letter.charCodeAt(0));

  // 💬 Get an average of how many loops we need
  const avgLoops = Math.trunc(ascii.length / 2);

  // 💬 Loop avgLoops times
  for (let i = 0; i < avgLoops; i++) {
    // 💬 Calculate index at the beginning and end
    let indexStart = i;
    let indexEnd = ascii.length - (1 + i);

    // 💬 Get the values from ascii based on index
    let letter1 = ascii[indexStart];
    let letter2 = ascii[indexEnd];

    // 💬 Check wich letter is lower to substract, add to counter and update ascii array
    if (letter1 > letter2) {
      operation = letter1 - letter2;
      counter += operation;
      ascii[indexStart] -= operation;
    } else {
      operation = letter2 - letter1;
      counter += operation;
      ascii[indexEnd] -= operation;
    }
  }

  return counter;
}

const result = theLoveLetterMystery('abc');
console.log(result); // 🐣 2
