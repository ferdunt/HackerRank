function migratoryBirds(arr) {
  let types = {};

  // 💬 Sort the array
  arr.sort((a, b) => a - b);

  // 💬 Create an object from 'arr'
  for (let i = 0; i < arr.length; i++) {
    types[arr[i]] ? types[arr[i]]++ : (types[arr[i]] = 1);
  }

  let value = 0;
  let maxKey = 0;

  // 💬 Loop the object
  for (const key in types) {
    const currentValue = types[key];

    // 💬 Compare if currentValue is bigger
    if (currentValue > value) {
      // 💬 Update variables
      value = currentValue;
      maxKey = key;
    }
  }
  return maxKey;
}

const result = migratoryBirds([1, 1, 2, 2, 3]);
console.log(result); // 🐣 1
