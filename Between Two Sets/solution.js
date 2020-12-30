function getTotalX(a, b) {
  // 💬 Get the lowest and highest value to search
  const low = Math.min(...a);
  const high = Math.max(...b);
  let counter = 0;

  // 💬 Loop between low and high
  for (let i = low; i <= high; i++) {
    // 💬 Check that i is factor of each number in 'a'
    if (a.every(num => i % num === 0)) {
      // 💬 Check that each num is factor of i in 'b'
      if (b.every(num => num % i === 0)) {
        counter++;
      }
    }
  }
  return counter;
}

const result = getTotalX([2, 6], [24, 36]);
console.log(result); // 🐣 2
