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

