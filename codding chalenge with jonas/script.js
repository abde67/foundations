const mark={
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

}