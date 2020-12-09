function gradingStudents(grades) {
  let newGrades = [];
  // 💬 Loop all the grades
  for (let i = 0; i < grades.length; i++) {
    const currentGrade = grades[i];
    // 💬 Check if current grade is less that38
    if (currentGrade < 38) {
      // 💬 Push original grade
      newGrades.push(currentGrade);
    } else {
      // 💬 Get the next multiple of 5 of current grade
      const nextMultiple = Math.ceil(currentGrade / 5) * 5;
      // 💬 Check the rule
      if (nextMultiple - currentGrade < 3) {
        // 💬 Push the new multiple of 5
        newGrades.push(nextMultiple);
      } else {
        // 💬 Push the original grade
        newGrades.push(currentGrade);
      }
    }
  }
  return newGrades;
}

const result = gradingStudents([73, 67, 38, 33]);
console.log(result); // 🐣 [75, 67, 40, 33]
