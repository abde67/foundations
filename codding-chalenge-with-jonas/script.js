/*const mark={
  name:'markes',
  mass:90,
  height:1.79,
  calcMBI: function(){
    this.BMI= this.mass/(this.height**2);
    return this.BMI;
  }
};


const jhon={
  name:'jhonas',
  mass:120,
  height:1.99,
  calcMBI: function(){
    this.BMI= this.mass/(this.height**2);
    return this.BMI;
  }
};
jhon.calcMBI();
mark.calcMBI();

  
if (mark.BMI>jhon.BMI) {
  console.log(`markes' BMI (${mark.BMI} ) is higher than jhon's BMI(${jhon.BMI})!`)
}else{
    console.log(`jhon's BMI (${jhon.BMI} ) is higher than markes' BMI(${mark.BMI})!`)

}*/


const calcTip=function(bill){
   return bill>= 50 && bill<=300 ? bill*0.15:bill*0.2;
}


const bills=[22,295,176,440,37,105,10,1100,86,52];
const tips=[];
const totals=[];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  
  tips.push(tip)
  totals.push(tip+bills[i])

}
console.log(bills,tips ,totals)




  const calcavaraage= function(arry){
let sum =0;

for (let i = 0; i < arry.length; i++) {
   sum += arry[i];

}
return sum / arry.length;  
  }

  console.log(calcavaraage(tips));
console.log(calcavaraage(totals));
console.log(calcavaraage(bills));
 