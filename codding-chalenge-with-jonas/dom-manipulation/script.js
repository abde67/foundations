//or oprator

//hellow will be the output b/c it is the first true falue
console.log(undefined||0||""||'hellow'||23)


// and oprator
// 0 will be excuted b/c it is a false vaue
console.log(0&&'jonas')
// null will be excuted b/c it is a false vaue
console.log('hello'&&23&&null&&'jonaas')






//coding chalenge
const game ={
  team1:'bayern munich',
  team2:'borrussia dortmund',
  player:[
    [
      'nidrw',
      'dfhsw',
      'fhsgwwhfbn',
      'dgfurwjr',
      'hdgiwgw',
      'fhsjhwgjhg',
      'fhhrh',
      'haard',
      'mazard'
    ],
    [
      'dfiiwi',
      'mala',
      'nala',
      'yaya',
      'tata',
      'mumu',
      'gaga'
    ],

  ],
  score:'4:0',
  scored:['fhsjhwgjhg', 'fhhrh', 'fhsjhwgjhg', 'mazard'],
  date:'nov 9th,2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5,
  },
  scores:{
    fhsjhwgjhg:2,
    fhhrh:1,
    mazard:1,

  }
};
//1

for(const [i,player]of game.scored.entries())
  console.log(`goal ${i+1}: ${player}`);

//2
let avarage=0;
const odds=Object.values(game.odds);
for (const odd of odds)
  avarage+=odd;
avarage/=odds.length;
console.log(avarage);

//3
 for(const[team,odd]of Object.entries(game.odds)){
  const teamstr=team==='x'?'draw':`victory ${game[team]}`;

  console.log(`odd of ${teamstr} ${odd}`);
}
//4

for (const[palayers,nubofgoal]of Object.entries(game.scores))
  console.log(`${palayers}  scores: ${nubofgoal}`)









//entries with array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
 


//List the Entries
let text = "";
for (let x of Object.entries(fruits)) {
  text += x;
}

console.log(text)

// entries with objects

const team={
  team1:'baba',
  team2:'lala',
  team3:'mma',
}

for(const [teams,name]of Object.entries(team))
  console.log(`teame ${teams} name:${name}`);





//set


const orderset = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risoto',
  'pasta',
  'pizza',
]);
//only excute the different values the duplicates will to together
console.log(orderset);
console.log(orderset.size);//will be  3 b/c it have 3 different foods
console.log(orderset.length);// will bw undifined we cannot do this
console.log(orderset.has('pizza'));
console.log(orderset.has('papaya'));

orderset.add('garlik bread');
orderset.add('garlik bread');
orderset.delete('garlik bread')//will delete all garlick bread

console.log(orderset);


for(const order of orderset)//loping is posible but it will excute the uniqe vallues only not all of them
  console.log(order);




//example
const staff= ['waiter','chef','waiter','manager','chef','waiter'];

let staffuniqe=new Set(staff);
console.log(staffuniqe);
//we can change the set to arrays and we can manipulet them as an array
 staffuniqe=[...new Set(staff)]

console.log(staffuniqe);
//we can use set to se how many letters are in the word like
console.log(new Set('qwertyuiiuuyttreewq').size);


//map
// we can use array , string , object , number and boolian as a key

const rest =new Map();
rest.set('name','addis ababa');
rest.set(1,'firenze ,italy')

  rest.set(2,'lisbon,portugal');
  rest
  .set('catagories',['italian','pizzerian','vegiterian','organic'])
  .set('open',11)
  .set('close',23)
  .set(true,`we'r open:d`)
  .set(false,`we'r close :(`);

  console.log(rest.get('name'));
    console.log(rest.get(true));
  console.log(rest.get(1));

  const time =8;
 console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

// we can add elements withut set opration

const question=new Map([
   ['question','what is the best programming languege in the worled?'],
   [1,'C'],
   [2,'java'],
   [3,'javascript'],
   ['correct',3],
   [true,'correct'],
   [false,'try again']
]
 
  );
  console.log(question);

  // we can convert object to map

  const teamMap=new Map(Object.entries(team))
console.log (teamMap);

//iteration with map
console.log(question.get('question'));

for(const [key,value]  of question){
  if(typeof key==='number') console.log(`answer ${key}: ${value}`);

}
const answer =Number(/*prompt('your answer')*/);
console.log(answer);


console.log (question.get(question.get('correct')===answer));

//convert to array

const maparr=[...question];
console.log(maparr); 
console.log([...question.keys()])

console.log([...question.values()]);

//coding chalenge

const gameEvents=new Map([
  [17,'goal'],
  [36,'substitution'],
  [47,'goal'],
  [61,'substitution'],
  [64,'yellow card'],
  [69,'red card'],
  [70,'substitution'],
  [72,'substitution'],
  [76,'goal'],
  [80,'goal'],
  [92,'yellow card']

]);

//1
const events=[...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
//3
const times =[...gameEvents.keys()].pop();
console.log(`an evvent happen on avarage, every ${times/gameEvents.size} minutes`);

//4

for (const [min,event]of gameEvents){
   const half =min<=45 ?'first':'second'
   console.log(`[${half}] ${min}: ${event}`);
}


const checmiddleseat =function(seat){
 const s= seat.slice(-1);
 if(s==='B'||s==='E'){
  console.log('you got the middle seat')
 }else{
  console.log('you got lucky');
 }
}
checmiddleseat('11B');
checmiddleseat('23C');
checmiddleseat('3E');
     




const pasanger='jona';

console.log(pasanger.replaceAll('jona' ,' lala'));

  
//function that return the new function

const greet=function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`)
  }
};
const greeterhey=greet('hey');
greeterhey('janas')
greeterhey('steven')


//using arrow function

const greetarr=greeting=>name=>{console.log(`${greeting} ${name}`)}

greetarr('hhi')('baba');


//this keyword

const lusthansa={
  arline:'lusthansa',
  iatacod:'LH',
  bookings:[],
  book(flightnum,name){
    console.log(`${name} booked a seat on ${this.arline} flight ${this.iatacod}${flightnum}`);
 
    this.bookings.push({flight:`${this.iatacod}${flightnum}`,name});
 
  },

};

lusthansa.book(234,'abebech debebe');
 lusthansa.book(234,'lala land');
 console.log(lusthansa);


 const ethiowings={
  arline:'ethiowings',
  iatacod:'EW',
bookings:[],

 }

//we want to take the same method as the lusthansa
 const book =lusthansa.book;
//it donstn work lie this it will becon=m an ordinary function 
// book(23,'sarah william');

//we need to use the 'call' method
book.call(ethiowings,23,'sarah william')
book.call(lusthansa,234,'abebech debebe');


//aply mathod

const flightdata=[543,'yalew debebe'];
book.apply(ethiowings,flightdata);

book.call(ethiowings,...flightdata)

//bind method

const bookew=book.bind(ethiowings)
bookew(32,'sarah william');



//with event listner
lusthansa.plane=300;
lusthansa.buyplanes=function(){
  console.log(this);
  this.plane++;
  console.log(this.plane);

};
document.querySelector('.buy').addEventListener
('click',lusthansa.buyplanes.bind(lusthansa));


// coding challenge 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


  //run once

  const runOnce=function(){
    console.log('this will never run again')
  };
//imidiatle invok
 ( function (){
     console.log('this will never run again')
  } )();

 ( ()=>  console.log('this will never run again'))(); 