function main(n) {
  // 💬 Convert the number to binary
  const binary = n.toString(2);
  let posibleSolutions = [];
  let group = [];

  // 💬 Loop each binary number
  for (let i = 0; i < binary.length; i++) {
    const currentNumber = binary[i];

    // 💬 Check if it is 1
    if (currentNumber === '1') {
      // 💬 Push the current number
      group.push(currentNumber);
    } else if (group.length > 0) {
      // 💬 Cut the group and start again
      posibleSolutions.push(group.length);
      group = [];
    }
  }

  // 💬 Check the if the last group
  if (group.length > 0) posibleSolutions.push(group.length);

  // 💬 Return the max value in 'posibleSolutions' array
  return Math.max(...posibleSolutions);
}

const result = main(125);
console.log(result); // 🐣 5
