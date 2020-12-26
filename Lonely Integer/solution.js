function lonelyinteger(arrayNumbers) {
  // 💬 Create an object from 'arrayNumbers'
  const unique = arrayNumbers.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});

  // 💬 Loop all the object until find which has 1
  for (const number in unique) {
    if (unique[number] === 1) {
      return number;
    }
  }
}

const result = lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
console.log(result); // 🐣 4
