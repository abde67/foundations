const showButton=document.getElementById("showDialog");
const favDialog=document.getElementById("favDialog");
const outputBox=document.querySelector("output");
const selectEl=document.querySelector("select");
const confirmBtn=document.querySelector("#confirmBtn");


showButton.addEventListener("click",()=>{
  favDialog.showModal();
});

favDialog.addEventListener("close", (e)=>{
  outputBox.value=
  favDialog.returnValue==="default"? "noreturn value":`returnvalue:${favDialog.returnValue}.`

});
confirmBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  favDialog.close(selectEl.value);
});