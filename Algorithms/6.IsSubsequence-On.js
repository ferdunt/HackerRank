// 💬 Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the secon string.

function isSubsequence(str1, str2) {
  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
  }

  return false;
}

const result = isSubsequence('hello', 'hello world');
console.log(result);
