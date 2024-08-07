class Book {
  #author;
  #price;
  #rentalPrice;
  #copiesAvailable;
  constructor(title, author, price, rentalPrice, copiesAvailable) {
    this.title = title;
    this.#author = author;
    this.#price = price;
    this.#rentalPrice = rentalPrice;
    this.#copiesAvailable = copiesAvailable;
  }

  getTitle() {
    return this.title;
  }
  setTitle(title) {
    this.title = title;
  }
  getAuthor() {
    return this.#author;
  }
  setAuthor(author) {
    this.#author = author;
  }
  getPrice() {
    return this.#price;
  }
  setPrice(price) {
    this.#price = price;
  }
  getRentalPrice() {
    return this.#rentalPrice;
  }
  setRentalPrice(rentalPrice) {
    this.#rentalPrice = rentalPrice;
  }
  getCopiesAvailable() {
    return this.#copiesAvailable;
  }
  setCopiesAvailable(copiesAvailable) {
    this.#copiesAvailable = copiesAvailable;
  }
  BuyBook(copies) {
    if (copies <= this.#copiesAvailable) {
      this.#copiesAvailable -= copies;
    } else {
      console.log("Not enough copies available!");
    }
  }
  RentBook(copies) {
    if (copies <= this.#copiesAvailable) {
      this.#copiesAvailable -= copies;
    } else {
      console.log("Not enough copies available!");
    }
  }
  ReturnBook(copies) {
    this.#copiesAvailable += copies;
  }
  copiesAvailable() {
    return this.#copiesAvailable;
  }
}

let book1 = new Book("Book1", "Author1", 10, 5, 10);

console.log(book1.getTitle()); // Book1

book1.setTitle("New Book Title");

console.log(book1.getTitle()); // New Book Title

console.log(book1.getAuthor()); // Author1

book1.setAuthor("New Author");

console.log(book1.getAuthor()); // New Author

console.log(book1.getPrice()); // 10

book1.setPrice(20);

console.log(book1.getPrice()); // 20

console.log(book1.getRentalPrice()); // 5

book1.setRentalPrice(7);

console.log(book1.getRentalPrice()); // 7

console.log(book1.getCopiesAvailable()); // 10

book1.BuyBook(5);

console.log(book1.getCopiesAvailable()); // 5

book1.RentBook(3);

console.log(book1.getCopiesAvailable()); // 2
