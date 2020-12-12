function catAndMouse(x, y, z) {
  // 💬 Calculate the distance for each cat
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);

  // 💬 Evaluate both distances based on rules
  if (catA > catB) {
    return 'Cat B';
  } else if (catB > catA) {
    return 'Cat A';
  } else {
    return 'Mouse C';
  }
}

const result = catAndMouse(1, 3, 2);
console.log(result); // 🐣 "Mouse C"
