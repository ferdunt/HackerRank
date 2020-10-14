function diagonalDifference(arr) {
    // 💬 Define left and right
    let left = 0;
    let right = 0;

    // 💬 Loop in the first array
    for (let i = 0; i < arr.length; i++) {
        // 💬 Loop in the second array
        for (let j = 0; j < arr.length; j++) {
            // 💬 Check if they are (0,0) (1,1) (2,2)
            if (i === j) {
                left += arr[i][j];
            }

            // 💬 Check if they are (0,2) (1,1) (2,0)
            if (i + j === arr.length - 1) {
                right += arr[i][j];
            }
        }
    }

    // 💬 Convert the result to an absolute number
    return Math.abs(left - right);
}

const result = diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
]);

console.log(result); // 🐣 2
