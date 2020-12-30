function sumXor(n) {
  // 💬 Check that is greater that 2
  if (n > 2) {
    // 💬 Create a regex to find 0
    const myRegex = /(0)/g;

    // 💬 Convert n to binary and count all the 0
    let counter = n.toString(2).match(myRegex).length;

    // 💬 Evaluate 2^counter
    return 2 ** counter;
  } else {
    return 1;
  }
}

const result = sumXor(5);
console.log(result); // 🐣 2
