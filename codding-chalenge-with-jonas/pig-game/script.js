const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');

const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')

const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');

const palyer0El=document.querySelector('.player--0');
const palyer1El=document.querySelector('.player--1');


let  scores,currentScore,playing,activeplayer;

const init=function(){
   scores=[0,0];
  currentScore=0;
 activeplayer=0;
 playing=true;


  score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;
diceEl.classList.add('hidden');
palyer0El.classList.remove('player--winner');
palyer1El.classList.remove('player--winner');
palyer0El.classList.add('player--active');
palyer1El.classList.remove('player--active');

}
;
init();


//rooling

const switchPlayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;

    activeplayer=activeplayer===0 ? 1:0;
    currentScore=0;
    palyer0El.classList.toggle('player--active')
    palyer1El.classList.toggle('player--active')


}

btnRoll.addEventListener('click',function(){
if (playing) {
  

  const dice=Math.trunc(Math.random()*6)+1;
console.log(dice)
  diceEl.classList.remove('hidden');
  diceEl.src=`icons/dice-${dice}.svg`;

  if (dice!==1) {
    currentScore+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=currentScore;
    
  }
  else{
   switchPlayer();

  }}
});



btnHold.addEventListener('click',function(){
  if (playing) {
    
  
   scores[activeplayer]+=currentScore;

   document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];
if (scores[activeplayer]>=100) {
  playing=false;  
  diceEl.classList.add('hidden');
  document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');

} else{
switchPlayer();
}

}
   
}) ;


 
btnNew.addEventListener('click',init);

