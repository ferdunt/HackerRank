function solution(arr) {
  let hourGlass = [];
  let clocks = [];

  // 💬 Loop 4 Rows
  for (let row = 0; row < 4; row++) {
    // 💬 Loop 4 Columns
    for (let col = 0; col < 4; col++) {
      // 💬 Loop 3 inner rows
      for (let r = row; r < 3 + row; r++) {
        const currentRow = arr[r];
        // 💬 Loop 3 columns in each inner row
        for (let c = col; c < 3 + col; c++) {
          const currentColumn = currentRow[c];
          // 💬 Push the value into hourGlass
          hourGlass.push(currentColumn);
        }
      }

      // 💬 Delete the data in position 3 and 5 in each 'hourGlass'
      hourGlass[3] = 0;
      hourGlass[5] = 0;

      // 💬 Sum all the numbers
      hourGlass = hourGlass.reduce((acc, cur) => acc + cur);

      // 💬 Push the value in 'clocks'
      clocks.push(hourGlass);

      // 💬 Restart 'hourGlass'
      hourGlass = [];
    }
  }

  // 💬 Check the max value in 'clocks'
  let maximum = Math.max(...clocks);

  return maximum;
}

// 💬 Only work for an array 6x6
const myArray = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const result = solution(myArray);
console.log(result); // 🐣 19
