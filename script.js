let check = 0

//The Library for the books
let myLibrary = []


//The class for the Book objects
class Book {
    constructor(title, author, readStatus, pages) {
        this.title = title
        this.author = author
        this.readStatus = readStatus
        this.pages = pages
    }
}

//Placeholder books
const gameOfThrones = new Book("A Game of Thrones", "George R.R Martin", "Yes", "720")
const hyperion = new Book("Hyperion", "Dan Simmons", "Yes", "482")


//Pushing the books to the library
myLibrary.push(gameOfThrones)
myLibrary.push(hyperion)


pullInformation()
pullInformation()


function pullInformation() {

    let title = myLibrary[check].title
    let author = myLibrary[check].author
    let readStatus = myLibrary[check].readStatus
    let pages = myLibrary[check].pages

    bookAdd(title, author, readStatus, pages)
}

function bookAdd(title, author, readStatus, pages) {
    //Creates the book structure 
    let book = document.createElement("div")
    book.className = "card"
    book.dataset.id = check
    const titleDiv = document.createElement("div")
    const authorDiv = document.createElement("div")
    const readDiv = document.createElement("div")
    const pagesDiv = document.createElement("div")
    const button = document.createElement("button")

    //Appends Children to main div
    book.appendChild(titleDiv)
    book.appendChild(authorDiv)
    book.appendChild(readDiv)
    book.appendChild(pagesDiv)
    book.appendChild(button)


    //Information provided
    titleDiv.innerText = `${title}`
    authorDiv.innerText = `${author}`
    readDiv.innerText = `${readStatus}`
    pagesDiv.innerText = `${pages} pages`
    button.innerText = "Delete"


    //Eventlistener for button
    button.addEventListener("click", (e) => {

        //Gets the data-id from the parent, removes it from the website and removes it from the array
        const parent = e.target.parentNode
        console.log(indexPosition = parent.getAttribute("data-id"))
        myLibrary.splice(indexPosition, 1)
        parent.remove()
    })

    //Global index value that gets incremeneted wth every book
    check += 1
    //Adds it to the cardContainer structure
    let cardContainer = document.querySelector(".cardsContainer")
    cardContainer.appendChild(book)

}


function showForm() {
    document.getElementById("form").classList.add("show")
    document.getElementById("form").addEventListener("click", function (event) {
        event.preventDefault()
    });

}

function addForm() {


    const form = document.getElementById("form")

    title = document.querySelector("#title")

    console.log(title.value)
        
        title.value = wow

}




