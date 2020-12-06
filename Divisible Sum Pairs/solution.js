function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  // 💬 Loop 2 times (i,j) to match every posible solution
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const first = ar[i];
      const second = ar[j];

      // 💬 Evaluate the 2 rules
      if (i < j && (first + second) % k === 0) {
        counter++;
      }
    }
  }

  return counter;
}

const sizeArray = 6;
const numberArray = [1, 3, 2, 6, 1, 2];
const divisible = 3;
const result = divisibleSumPairs(number, divisible, list);
console.log(result); // 🐣 5
