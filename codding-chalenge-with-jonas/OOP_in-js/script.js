// const person= function(Fname,Lname){
// this.Fname=Fname;
// this.Lname=Lname;
// // prototype inheritnce love that
// }









// class Car{
//  speed=40
 
// accelerate(){
//   this.speed+10;
// }
// brreak(){
//   this.speed-5; 
// }
//   get speedUS(){
//     console.log(this.speed/1.6)
//   }
//   set speedUS(speed){
//     this.speed*1.6;
//   }
// }





class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}



class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge); it is not gonna work out b/c charge is a privat filed


rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();
console.log(rivian.speedUS);