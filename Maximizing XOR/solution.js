function maximizingXor(l, r) {
  let max = 0;

  // 💬 Loop each each pair of 'l' and 'r'
  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      // 💬 Evaluate XOR with i and j
      const evaluation = i ^ j;

      // 💬 Get the maximum value
      if (evaluation > max) max = evaluation;
    }
  }

  return max;
}

const result = maximizingXor(10, 15);
console.log(result); // 🐣 7
