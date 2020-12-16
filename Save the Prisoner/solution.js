function saveThePrisoner(n, m, s) {
  // 💬 Calculate with a formula
  const formula = ((m % n) + (s - 1)) % n;

  // 💬 Check if the formula is equal to 0
  if (formula === 0) {
    return n;
  } else {
    return formula;
  }
}
const result = saveThePrisoner(4, 6, 2);
console.log(result); // 🐣 3
