function sansaXor(arr) {
  // 💬 Check if the array given is not even
  if (arr.length % 2 === 0) {
    return 0;
  } else {
    // 💬 Filter the odd index positions
    const oddNumbers = arr.filter((i, index) => index % 2 === 0);

    // 💬 Calculate each number with XOR
    const xorNumbers = oddNumbers.reduce((acc, cur) => acc ^ cur);
    return xorNumbers;
  }
}

const result = sansaXor([3, 4, 5]);
console.log(result); // 🐣 6
