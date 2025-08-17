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
