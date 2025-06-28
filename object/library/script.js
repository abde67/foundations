
const addBooks=document.getElementById('addBooks');
const showBooks=document.getElementById('showBooks');
const dialog=document.querySelector("dialog");
const output=document.querySelector('output');
const submit=document.querySelector('#submit');
const form=document.querySelector("form");


const myLibrary=[];

   





addBooks.addEventListener("click", () => {
  dialog.showModal();});

  dialog.addEventListener('close',(e)=>{
    output.value=
    dialog.returnValue==="default"?"no return value"
    :`book= ${dialog.returnValue}.`;
  })
submit.addEventListener('click',(event)=>{
  event.preventDefault();
  dialog.close(form.value);
});
