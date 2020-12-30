function andProduct(a, b) {
  // 💬 Check if a is equal to 0
  if (a === 0) return 0;

  // 💬 Get the size between a and b
  const size = b - a;

  let bitwiseOperation = 0;

  // 💬 Evaluate from 0 to 31 (32 bits)
  for (let i = 0; i < 32; i++) {
    // 💬 Calculate (2^i) to get a decimal value in 32 bits
    // 💬 In bitwise manipulation translates to (1 << i)
    const calculation = Math.pow(2, i);
    // 💬 Check that size is below the calculation
    if (size <= calculation) {
      // 💬 Made 2 evaluation for a and b
      if (a & calculation && b & calculation) {
        // 💬 If both are true add the value of calculation to final result
        bitwiseOperation += calculation;
      }
    }
  }
  return bitwiseOperation;
}

const result = andProduct(10, 14);
console.log(result); // 🐣 8

// 🎉 RESULTS 🎉
// a = 10, b = 14
// size = b - a = 4
// 10 = 1010
// 14 = 1110
// 💬 Invalid Operations
// i = [0,1] => calculations = [1,2]
// 💬 Valid Operation
// i = [2,3,4,5.....31] => calculations = [4,8,16,32.... 2147483648]
// 💬 Check a and b with valid operations
// calculations = [8]
// Return 8
