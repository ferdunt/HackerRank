function pickingNumbers(numbers) {
  // 💬 Order the numbers array
  numbers = numbers.sort((a, b) => a - b);

  let counter = 0;
  let longNumber = 0;
  let start = 0;

  // 💬 Loop the numbers
  for (let i = 1; i < numbers.length; i++) {
    // 💬 Check the rule between 2 numbers
    if (numbers[i] - numbers[start] <= 1) {
      // 💬 Increase counter by 1
      counter++;
    } else {
      // 💬 Check if counter is the biggest
      if (counter > longNumber) {
        longNumber = counter;
      }
      counter = 0;
    }
    // 💬 Update start with 'i'
    start = i;
  }

  // 💬 Check the last counter
  if (counter > longNumber) {
    longNumber = counter;
  }

  return longNumber + 1;
}

const result = pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
console.log(result); // 🐣 5
