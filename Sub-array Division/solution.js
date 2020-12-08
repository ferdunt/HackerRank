function birthday(numbers, day, month) {
  let posibleDivision = [];
  let bar = 0;

  // 💬 Loop to get posible solutions
  for (let i = 0; i < numbers.length; i++) {
    // 💬 Create a new array of 'month' length
    const monthGroup = numbers.slice(i, month + i);
    if (monthGroup.length === month) {
      posibleDivision.push(monthGroup);
    }
  }

  // 💬 Check each group if their sum is equal to 'day'
  posibleDivision.forEach(group => {
    let sum = group.reduce((acc, cur) => acc + cur);
    if (sum === day) {
      bar++;
    }
  });

  return bar;
}

const result = birthday([1, 2, 1, 3, 2], 3, 2);
console.log(result); // 🐣 2
