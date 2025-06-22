
const addBooks=document.getElementById('addBooks');
const showBooks=document.getElementById('showBooks');
const myLibrary=[];

function Book(title, author,page, isRead){
  this.title=title;
  this.author=author;
  this.page=page;
  this.isRead=isRead;
}

function addBookToLibrary(){
  myLibrary.push(Book);
  console.log(maylibrary[i]);
}





const divBook=document.createElement("div");
divBook.setAttribute('id','divBook');

showBooks.append(divBook)
