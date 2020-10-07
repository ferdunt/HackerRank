function compareTriplets(a, b) {
    // 💬 Create 2 variables to store the resutls
    let pointsA = 0;
    let pointsB = 0;

    // 💬 We loop 3 times for the three categories
    for (let i = 0; i < 3; i++) {
        // 💬 Check the first rule if they are equal no points for anyone
        if (a[i] !== b[i]) {
            // 💬 Check the second and third rule
            a[i] > b[i] ? pointsA++ : pointsB++;
        }
    }

    // 💬 return the points from A and B as an array
    return [pointsA, pointsB];
}

// 🚧 TESTING 🚧
const a = [5, 6, 7];
const b = [3, 6, 10];

const result = compareTriplets(a, b); // 🥚
console.log(result); // 🐣 [1, 1]
