function aVeryBigSum(numbers) {
    // 💬 Loop over the array with a reduce and sum all the numbers
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

const result = aVeryBigSum([
    1000000001,
    1000000002,
    1000000003,
    1000000004,
    1000000005,
]); // 🥚

console.log(result); // 🐣 5000000015
