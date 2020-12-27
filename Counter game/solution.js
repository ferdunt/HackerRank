function counterGame(n) {
  const players = ['Louise', 'Richard'];
  let currentPlayer;
  let winner = 0;
  let powerOfTwo = [];

  // 💬 Loop until we reach 1
  while (n !== 1) {
    // 💬 Set the next player
    currentPlayer = currentPlayer === 0 ? 1 : 0;

    // 💬 Call the function to get an array
    calculatePower(n);

    // 💬 Check if the current 'n' is powerOOfTwo
    if (powerOfTwo.includes(n)) {
      // 💬 Divide n by 2
      n = n / 2;
    } else {
      // 💬 Substract the last item in powerOfTwo array to 'n'
      n = n - powerOfTwo[powerOfTwo.length - 1];
    }
  }

  // 💬 Calculate the power of 2 from 2 to 'n'
  function calculatePower(n) {
    powerOfTwo = [];
    for (let i = 2; i <= n; i *= 2) {
      powerOfTwo.push(i);
    }
  }

  winner = players[currentPlayer];
  return winner;
}

const result = counterGame(132);
console.log(result); // 🐣 "Louise"
