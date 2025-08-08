
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  
 
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

};

const accounts = [account1, account2];

//////////////////////////////////////////////////////////////////
// APP
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovment=function(movements){
  containerMovements.innerHTML='';
  movements.forEach(function(mov,i){
    const type =mov>0?'deposit':'withdrawal';
    const html=`<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin",html);

  })
};
displayMovment(account1.movements);


   const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);






// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd=1.1;

//  const totalDepositsUsd= movements
//  .filter(mov=>mov>0)
//  .map(mov=>mov*eurToUsd)
//  .reduce((acc,mov)=>acc+mov,0);

//  console.log(totalDepositsUsd);


 // const check =function(dogsjulia,dogskate){
// const juliacorrect =dogsjulia.slice();

// juliacorrect.splice(0,1);
// juliacorrect.splice(-2);


// const dogs=juliacorrect.concat(dogskate);
// console.log(dogs);
// dogs.forEach(function(dog,i){
//   dog>=3?console.log(`dog number ${i+1} is an adult, and is ${dog} yeas old`):console.log(`dog number ${i+1} is an pappi, and is ${dog} yeas old`)

// });
// };
// check([3,3,4,5,6,2,6,7,9],[6,4,1,3,7,8,9])

