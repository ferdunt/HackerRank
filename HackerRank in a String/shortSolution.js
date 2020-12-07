function hackerrankInString(text) {
  const myRegex = /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/g;

  return myRegex.test(text) ? 'YES' : 'NO';
}

const result = hackerrankInString('hereiamstackerrank');
console.log(result); // 🐣 YES
