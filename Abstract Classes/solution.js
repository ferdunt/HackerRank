// 💬 Parent Class
class Book {
  constructor(title, author) {
    if (this.constructor === Book) {
      throw new TypeError(
        'Do not attempt to directly instantiate an abstract class.'
      );
    } else {
      this.title = title;
      this.author = author;
    }
  }

  display() {
    console.log("Implement the 'display' method!");
  }
}

// 💬 Child Class
class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }

  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }
}

let book = new MyBook('The Alchemist', 'Paulo Coelho', 248);
book.display();
