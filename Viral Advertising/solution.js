function viralAdvertising(n) {
  let shared = 0;
  let acc = 0;
  let liked = 0;

  // 💬 Loop from 1 to n
  for (let i = 1; i <= n; i++) {
    // 💬 Check just once if there is no shared
    if (!shared) shared = 5;

    // 💬 Calculate liked, acc and shared
    liked = Math.floor(shared / 2);
    acc += liked;
    shared = liked * 3;
  }

  return acc;
}

const result = viralAdvertising(5);
console.log(result); // 🐣 24
