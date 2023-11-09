const myLibrary = [];

let bookTitle, bookAuthor, bookPages, hasRead;

document.getElementById('saveBookButton').addEventListener('click', function () {
    bookTitle = document.getElementById('bookTitle').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    bookPages = document.getElementById('bookPages').value;
    hasRead = document.getElementById('bookRead').value;

    addBookToLibrary(bookTitle, bookAuthor, bookPages, hasRead);
    displayBooks();

    $('#newBookModal').modal('hide');
});

document.getElementById('book-list').addEventListener('click', function (event) {
    const target = event.target;

    // Check if the clicked element is a "hasRead" button
    if (target.classList.contains('hasReadButton')) {
        const index = parseInt(target.id.split('-')[1]); // Extract the index from the id
        console.log(index);
        toggleHasRead(index);
        displayBooks(); // Update the displayed books after modifying "hasRead"
    }

    // Check if the clicked element is a "Delete" button
    if (target.classList.contains('deleteBookButton')) {
        const index = parseInt(target.getAttribute('data-index')); // Get the data-index attribute
        deleteBook(index);
        displayBooks(); // Update the displayed books after deleting
    }
});

function createBookCard(book, index) {
    const card = document.createElement('div');
    card.className = "card col-md-4";
    card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title" id="book-title-${index}">${book.title}</h5>
            <p class="card-text" id="book-author-${index}">${book.author}</p>
            <p class="card-text" id="book-pages-${index}">${book.pages}</p>
            <button class="btn btn-primary hasReadButton" id="hasRead-${index}">${book.hasRead}</button>
            <button class="btn btn-primary deleteBookButton" data-index="${index}">Delete</button>
        </div>
    `;
    return card;
}

function toggleHasRead(index) {
    myLibrary[index].hasRead = !myLibrary[index].hasRead;
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
}

function Book(bookTitle, bookAuthor, bookPages, hasRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.hasRead = hasRead;
    this.info = function () {
        console.log(this.title + "by" + this.author + ", " + this.pages + ", " + hasRead);
    }
}

function getBookByTitle(bookTitle) {
    const book = myLibrary.filter(book => book.title === bookTitle);
    return book;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, hasRead) {
    const book = new Book(bookTitle, bookAuthor, bookPages, hasRead);
    myLibrary.push(book);
}

function displayBooks() {
    // get list of books from library
    const listOfBooks = document.getElementById('book-list');
    listOfBooks.innerHTML = "";

    if (myLibrary.length === 0) {
        const noBooksAvailable = document.createElement("p");
        noBooksAvailable.textContent = "No Books Available";
        listOfBooks.appendChild(noBooksAvailable);
    } else {
        myLibrary.forEach(book => {
            const bookCard = createBookCard(book, myLibrary.indexOf(book));
            listOfBooks.appendChild(bookCard);
        })
    }
}

/*
function deleteBook(book) {
    // find book index inside library
    const index = myLibrary.findIndex(book => book === book);
    
    // if index found, delete them
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
    displayBooks();
}
*/
