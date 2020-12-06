function alternate(text) {
  // 💬 Get unique values from 'text'
  const uniqueValues = [...new Set(text)];
  let posibleCases = [];
  let solutions = [];
  let longestString = 0;

  // 💬 Idenfity the posible cases to delete
  for (let i = 0; i < uniqueValues.length; i++) {
    for (let j = i + 1; j < uniqueValues.length; j++) {
      posibleCases.push([uniqueValues[i], uniqueValues[j]]);
    }
  }

  // 💬 Loop the posible cases
  for (let k = 0; k < posibleCases.length; k++) {
    let copyText = text;
    let [first, second] = posibleCases[k];
    const myRegex = new RegExp(`[^${first}${second}]`, 'g');

    // 💬 Replace the posible delete cases
    copyText = copyText.replace(myRegex, '');

    // 💬 Check if it is a valid result
    let valid = true;
    for (let i = 0; i < copyText.length; i++) {
      const current = copyText[i]; // b
      const next = copyText[i + 1]; // b
      if (current === next) {
        valid = false;
        break;
      }
    }

    // 💬 If is valid push to solutions
    if (valid) {
      solutions.push(copyText.length);
    }

    // 💬 Calculate the longest string in solutions
    if (solutions.length > 0) {
      longestString = Math.max(...solutions);
    }
  }

  return longestString;
}

const result = alternate('beabeefeab');
console.log(result);
