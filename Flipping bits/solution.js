function flippingBits(n) {
  // 💬 Convert n to binary and complete with 0 to be a 32 bit number
  let binary = n.toString(2).padStart(32, '0');
  let bynaryReversed = '';

  // 💬 Loop each number in binary
  for (let i = 0; i < binary.length; i++) {
    const currentBit = binary[i];
    // 💬 Reverse each number wit XOR evaluation
    bynaryReversed += currentBit ^ 1;
  }

  // 💬 Convert bynary to decimal
  let decimal = parseInt(bynaryReversed, 2);

  return decimal;
}

const result = flippingBits(9);
console.log(result); // 🐣 4294967286
