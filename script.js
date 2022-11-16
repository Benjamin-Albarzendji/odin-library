/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
let check = 0;

// The Library for the books
const myLibrary = [];

// The class for the Book objects
class Book {
  constructor(title, author, readStatus, pages) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.pages = pages;
  }
}

// Placeholder books
const gameOfThrones = new Book(
  "A Game of Thrones",
  "George R.R Martin",
  "Book Read",
  "720"
);
const hyperion = new Book("Hyperion", "Dan Simmons", "Book Read", "482");

// Pushing the books to the library
myLibrary.push(gameOfThrones);
myLibrary.push(hyperion);

pullInformation();
pullInformation();

function pullInformation() {
  const {title} = myLibrary[check];
  const {author} = myLibrary[check];
  const {readStatus} = myLibrary[check];
  const {pages} = myLibrary[check];

  bookAdd(title, author, readStatus, pages);
}

function bookAdd(title, author, readStatus, pages) {
  // Creates the book structure
  const book = document.createElement("div");
  book.className = "card";
  book.dataset.id = check;
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const readDiv = document.createElement("div");
  const pagesDiv = document.createElement("div");
  const button = document.createElement("button");

  // Appends Children to main div
  book.appendChild(titleDiv);
  book.appendChild(authorDiv);
  book.appendChild(readDiv);
  book.appendChild(pagesDiv);
  book.appendChild(button);

  // Information provided
  titleDiv.innerText = `${title}`;
  authorDiv.innerText = `${author}`;
  readDiv.innerText = `${readStatus}`;
  pagesDiv.innerText = `${pages} pages`;
  button.innerText = "Delete";

  // Eventlistener for button
  button.addEventListener("click", (e) => {
    // Gets the data-id from the parent, removes it from the website and removes it from the array
    const parent = e.target.parentNode;
    const indexPosition = parent.getAttribute("data-id");
    myLibrary.splice(indexPosition, 1);
    parent.remove();
  });

  // Global index value that gets incremeneted wth every book
  check += 1;
  // Adds it to the cardContainer structure
  const cardContainer = document.querySelector(".cardsContainer");
  cardContainer.appendChild(book);
}

function showForm() {
  document.getElementById("form").classList.add("show");
  document.getElementById("pop").classList.add("show");
  window.addEventListener("click", windowOnClick);
}

function addForm() {
  document.getElementById("form").addEventListener("click", (event) => {
    event.preventDefault();
  });

  const form = document.getElementById("form");
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  let read = document.querySelector("#read");

  if (title.value === "") {
    return;
  } if (author.value === "") {
    return;
  } if (pages.value === "") {
    return;
  }

  if (read.checked === true) {
    read = "Book Read";
  } else {
    read = "Not Read";
  }

  const newBook = new Book(title.value, author.value, read, pages.value);
  myLibrary.push(newBook);
  pullInformation();
  title.value = "";
  author.value = "";
  pages.value = "";

  document.getElementById("form").classList.remove("show");
  document.getElementById("pop").classList.remove("show");
}

function windowOnClick(e) {
  if (e.target === document.getElementById("pop")) {
    document.getElementById("form").classList.remove("show");
    document.getElementById("pop").classList.remove("show");
  }
}
