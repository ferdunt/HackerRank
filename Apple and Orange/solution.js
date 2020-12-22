function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // 💬 Calculate the distance of each map then filter from house distance
  const appleLand = apples
    .map(apple => apple + a)
    .filter(apple => apple >= s && apple <= t);
  const orangeLand = oranges
    .map(orange => orange + b)
    .filter(orange => orange >= s && orange <= t);

  console.log(appleLand.length); // 🐣 1
  console.log(orangeLand.length); // 🐣 2
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
