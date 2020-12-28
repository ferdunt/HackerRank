class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      'Name: ' +
        this.lastName +
        ', ' +
        this.firstName +
        '\nID: ' +
        this.idNumber
    );
  }
}

// 💬 Inherit from Person
class Student extends Person {
  constructor(firstName, lastName, idNumber, scores) {
    // 💬 Inherith 3 parameters from Person with super()
    super(firstName, lastName, idNumber);
    this.scores = scores;
  }

  // 💬 Create a method to calculate the average letter
  calculate() {
    const average =
      this.scores.reduce((acc, cur) => acc + cur, 0) / this.scores.length;
    let letter = '';
    if (average >= 90 && average <= 100) {
      letter = 'O';
    } else if (average >= 80 && average < 90) {
      letter = 'E';
    } else if (average >= 70 && average < 80) {
      letter = 'A';
    } else if (average >= 55 && average < 70) {
      letter = 'P';
    } else if (average >= 40 && average < 55) {
      letter = 'D';
    } else {
      letter = 'T';
    }

    return letter;
  }
}

let s = new Student('Fernando', 'Guisbert', 8135627, [100, 80]);
s.printPerson(); // 🐣 Name: Guisbert, Fernando ID: 8135627
s.calculate(); // 🐣 Returns 'O'
