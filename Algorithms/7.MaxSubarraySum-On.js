// 💬 Given an array of integers and a number, write a function called maxSubarraySum, which find the maximum sum of a subarray with the length of the number passed to the function.

function maxSubarraySum(arr, num) {
  let max = 0;

  // 💬 Check there is a valid input
  if (arr.length < num) return null;

  // 💬 Loop 'num' times to get the first sum
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  let temp = max;
  // 💬 Loop from 'num' to final array
  for (let j = num; j < arr.length; j++) {
    // 💬 Delete the previous number and add the next number
    temp = temp - arr[j - num] + arr[j];

    // 💬 Check if is the biggest number
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

const result = maxSubarraySum([100, 200, 300, 400], 2);
console.log(result); // 🐣 700
