function pageCount(n, p) {
  // 💬 Get the total pages
  const pages = Math.trunc(n / 2);

  // 💬 Count from left to right
  const leftToRigth = Math.trunc(p / 2);

  // 💬 Count from right to left
  const rightToLeft = pages - leftToRigth;

  // 💬 Calculate the min number
  const min = Math.min(leftToRigth, rightToLeft);

  return min;
}

const result = pageCount(5, 3);
console.log(result); // 🐣 1
