var cardTitle = document.querySelector('.card-title');

const bookTitle = prompt("Enter the book title: ");
const bookAuthor = prompt("Enter the book author: ");
const bookPages = prompt("How many pages inside the book?: ");
const hasRead = prompt("Have you read it? Yes or no: ");

const myLibrary = []

function Book(bookTitle, bookAuthor, bookPages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function () {
        console.log(this.title + "by" + this.author + ", " + this.pages + ", " + hasRead);
    }
}

function getBook(bookTitle) {
    const book = myLibrary.filter(book => book.title === bookTitle);
    return book;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, hasRead) {
    const book = new Book(bookTitle, bookAuthor, bookPages, hasRead);
    myLibrary.push(book);
}

function showBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}