function hurdleRace(k, height) {
  // 💬 Find the highest value in 'height'
  const highest = Math.max(...height);
  let doses = 0;

  // 💬 If the highest value is greater that k we calculate doses
  if (highest > k) doses = highest - k;

  return doses;
}

const result = hurdleRace(4, [1, 6, 3, 5, 2]);
console.log(result); // 🐣 2
