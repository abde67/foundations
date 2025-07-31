
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click' ,function(){
 const guess= Number(document.querySelector('.guess').value);

 if (!guess) {
  displayMessage('no guess yet!');
 }




 else if (guess===secretnumber){
document.querySelector('.number').textContent=secretnumber;
  // document.querySelector('.message').textContent='correct number!';
 displayMessage('correct number!');
  document.querySelector('body').style.backgroundColor='#60b347';
  document.querySelector('.number').style.width='30rem'; 


  if (score>highscore) {
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
  }
 }











 else if (guess!==secretnumber) {
    if (score>1) {
    //  document.querySelector('.message').textContent=guess>secretnumber? 'to high!':'to low!'
    displayMessage(guess>secretnumber? 'to high!':'to low!')
   score--;
   document.querySelector('.score').textContent=score;
  }else{
   
    //  document.querySelector('.message').textContent='you lose the game!'
    displayMessage('you lose the game!') ;
    document.querySelector('body').style.backgroundColor='rgb(182, 52, 52)';
    document.querySelector('.score').textContent=0;
  }
    

 }  
 
 
//  else if (guess>secretnumber) {
//   if (score>1) {
//      document.querySelector('.message').textContent='to high!'
//    score--;
//    document.querySelector('.score').textContent=score;
//   }else{
//      document.querySelector('.message').textContent='you lose the game!'
//      document.querySelector('.score').textContent=0;
//   }
    
//  }
//  else if (guess<secretnumber) {
  
//     if (score>1) {
//      document.querySelector('.message').textContent='to low!'
//    score--;
//    document.querySelector('.score').textContent=score;
//   }else{
//      document.querySelector('.message').textContent='you lose the game!'
//      document.querySelector('.score').textContent=0;
//   } }
})

document.querySelector('.again').addEventListener('click', function(){
  score=20;
   secretnumber=Math.trunc(Math.random()*20)+1;
      // document.querySelector('.message').textContent='start guessing...';
displayMessage('start guessing...');
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent='?';
document.querySelector('.guess').value='';
  document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem'; 


});