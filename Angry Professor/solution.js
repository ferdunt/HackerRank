function angryProfessor(k, a) {
  // 💬 Filter students who arrived on time
  const arrivalOnTime = a.filter(student => student <= 0).length;

  // 💬 Evaluate if the students are the required quantity of 'k'
  return arrivalOnTime >= k ? 'NO' : 'YES';
}

const result = angryProfessor(3, [-1, -3, 4, 2]);
console.log(result); // 🐣 "YES"
