function utopianTree(n) {
  let cycles = [];
  let position = 0;

  // 💬 Loop from 0 to n
  for (let i = 0; i <= n; i++) {
    // 💬 Check if is even or not
    if (i % 2 === 0) {
      position++;
    } else {
      position *= 2;
    }

    // 💬 Push current position
    cycles.push(position);
  }

  // 💬 Get the highest cycle
  const highest = cycles[n];

  return highest;
}
const result = utopianTree(5);
console.log(result); // 🐣 14
