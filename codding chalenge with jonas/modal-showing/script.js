const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
 const btnlosemodal=document.querySelector('.close-modal');
 const  btnopenmodal=document.querySelectorAll('.show-modal')

 const closemodal=function(){
   modal.classList.add('hidden');
  overlay.classList.add('hidden');
 }
 const showmodal=function(){
modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

 }

 for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener('click', showmodal)
  
 }


 btnlosemodal.addEventListener('click',closemodal);
 overlay.addEventListener('click',closemodal);

 document.addEventListener('keydown', function(e){
     if (e.key==='Escape'&&!modal.classList.contains('hidden')) {
      
        closemodal();
      
     }
      
     
 });
 