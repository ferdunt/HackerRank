function simpleArraySum(ar) {
    return ar.reduce((acc, cur) => acc + cur);
}

const result = simpleArraySum([1, 2, 3, 4, 10, 11]); // 🥚
console.log(result); // 🐣 31
