function breakingRecords(scores) {
  // 💬 Get the highest and lowest scores at position 0
  let highest = scores[0];
  let lowest = scores[0];
  let bestTimes = 0;
  let worstTimes = 0;

  // 💬 Loop the scores starting at 1
  for (let i = 1; i < scores.length; i++) {
    const current = scores[i];

    // 💬 Check if the current score is greater
    if (current > highest) {
      highest = current;
      bestTimes++;
    }

    // 💬 Check if the current score is lowest
    if (current < lowest) {
      lowest = current;
      worstTimes++;
    }
  }

  // 💬 Store the best and worst times scores
  const result = [bestTimes, worstTimes];

  return result;
}

const result = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
console.log(result); // 🐣 [2, 4]
