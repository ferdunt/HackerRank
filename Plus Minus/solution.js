function plusMinus(numbers) {
    // 💬 Store the size of the array
    const size = numbers.length;

    // 💬 Evaluate for positve numbers
    const positive = (
        numbers.filter(value => value >= 1).length / size
    ).toFixed(6);

    // 💬 Evaluate for negative numbers
    const negative = (
        numbers.filter(value => value <= -1).length / size
    ).toFixed(6);

    // 💬 Evaluate for zero numbers
    const zero = (numbers.filter(value => value == 0).length / size).toFixed(6);

    // 💬 Print the results
    console.log(positive);
    console.log(negative);
    console.log(zero);
}

const arrayNumbers = [1, 1, 0, -1, -1];
plusMinus(arrayNumbers);

// 🎉 RESULTS 🎉
// 🐣 0.400000
// 🐣 0.400000
// 🐣 0.200000
