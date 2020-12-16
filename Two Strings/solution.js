// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  let result = 'NO';

  // 💬 Get unique letters for each text
  s1 = [...new Set(s1)];
  s2 = [...new Set(s2)];

  // 💬 Get the shortest and longest array of both texts
  const short = s1.length > s2.length ? s2 : s1;
  const long = s1.length > s2.length ? s1 : s2;

  // 💬 Loop the short array
  for (let i = 0; i < short.length; i++) {
    const currentLetter = short[i];
    // 💬 Check if the letters from short are in the longest text
    if (long.includes(currentLetter)) {
      result = 'YES';
      break;
    }
  }

  return result;
}

const result = twoStrings('hello', 'world');
console.log(result); // 🐣 "YES"
