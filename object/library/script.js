const myLibrary=[];
function Book(title,author,page,isRead){
  this.title=title;
  this.author= author;
  this.page=page;
  this.isRead=isRead;
  
}

function addBookLibrary(){
  const bookId=crypto.randomUUID();
  const bookAdded=new Book(bookId,title,author,package,isRead);
  myLibrary.push(bookAdded);
  
}