
const addBooks=document.getElementById('addBooks');
const showBooks=document.getElementById('showBooks');
const dialog=document.querySelector("dialog");
const output=document.querySelector('output');
const submit=document.querySelector('#submit');
const form=document.querySelector("form");


const myLibrary=[];
function Book(title, author, numPages, read) {
  
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.id = crypto.randomUUID();
}
   
function addBookToLibrary(title, author, numPages, read) {
  
  const newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
}



const deleteBook = (id) => {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayAllBook();
  }
};


function displayAllBook() {
  const bookList = document.getElementById("showBooks");

  bookList.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");
    bookItem.className = "book-card";
    bookItem.id = book.id;
    bookItem.innerHTML = `
        <div>
          <h3 class="book-title truncate">${book.title}</h3>
          <p class="truncate">Author: ${book.author}</p>
          <p class="truncate">Pages: ${book.numPages}</p>
         
        </div>
        <div class="book-actions">
          <button class="delete-book-btn btn btn-danger">Delete book</button>
          <button class="btn toggle-read-btn">${
            book.read ? "Mark as Unread" : "Mark as Read"
          }</button>
        </div>
      `;
const deleteBtn = bookItem.querySelector(".delete-book-btn");
    const toggleReadBtn = bookItem.querySelector(".toggle-read-btn");

    toggleReadBtn.addEventListener("click", () => toggleReadStatus(book));

    deleteBtn.addEventListener("click", () => deleteBook(book.id));

    bookList.appendChild(bookItem);
  });}
function addNewBook(e) {
  e.preventDefault();
  console.log(e.target.title.value);
  const newBook = new Book(
    e.target.title.value,
    e.target.author.value,
    e.target.pages.value,
    e.target.read.checked,
    
  );
  myLibrary.push(newBook);
  displayAllBook();
 
}


 addBooks.addEventListener("click", ()=>{ showModal() } );

 
 
  dialog.addEventListener("submit", addNewBook);
  displayAllBook();



