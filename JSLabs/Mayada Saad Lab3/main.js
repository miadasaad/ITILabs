var  Shape = function(height, width) {
    if(this.constructor == Shape){
        throw 'Abstract Class, you can not create objects'
    }
    this.height =height
    this.width=width
    Object.defineProperties(this, {
        height:{
            value:height,
            configurable:false,
            enumerable:false,
            writable:false
        },
        width:{
            value:width,
            configurable:false,
            enumerable:false,
            writable:false
        }
    })
}

var Rectangle = function(height,width){

    if (this.constructor == Rectangle){
        (Rectangle.countObj)()
    }

    // if (this.constructor == Rectangle && Rectangle.count>1) {
    //     throw "you can not create more than one rectangle"
    // }
    Shape.call(this,height,width);
   
    
}

var Square = function (height,width) {
    if (this.constructor == Square){
        (Square.countobj)()
    }
    if (this.constructor == Square && Square.count>1) {
        throw "you can not create more than one square"
    }
    Rectangle.call(this,height,width)
}

Rectangle.prototype = Object.create(Shape.prototype)// modify the constructor for child
Rectangle.prototype.constructor = Rectangle

Square.prototype = Object.create(Rectangle.prototype)// modify the constructor for child
Square.prototype.constructor = Square

Rectangle.prototype.calcArea = function(){
    return this.height * this.width
}
Rectangle.prototype.calcPerim = function(){
    return (this.height + this.width)*2
}
Rectangle.prototype.toString = function(){
    return "height is "+this.height +", width is "+ this.width+" , area is "+this.calcArea()+" , perimeter is "+this.calcPerim()
}
//////////////////////////////////////// static count////////////////////////////////////
Rectangle.count= 0;
Rectangle.countObj= function () {
    Rectangle.count++;
}
Square.count = 0;
Square.countobj= function () {
    Square.count++;
}
////////////////////////////////////value of/////////////////////////////////
Rectangle.prototype.valueOf= function () {
    return this.calcArea()
}
Square.prototype.valueOf= function () {
    return this.calcArea()
}
//////////////////////////////////////testing//////////////////////////////////////////

var rect = new Rectangle(5,6)
// console.log(Rectangle.count);
// console.log(rect.calcArea());
// console.log(rect.calcPerim());
// console.log(rect.toString());
//var shape = new Shape();// error abstract class
var sqr = new Square(5,5)
// console.log(sqr.calcArea());
// console.log(sqr.calcPerim());
// console.log(sqr.toString());
var rectt = new Rectangle(6,6)// error:you can not create more than one rectangle
//console.log(Rectangle.count);
//var sqrr = new Square(6,6)// error:you can not create more than one square//
//console.log(Square.count);
console.log(rect+rectt);//66: 30+36
console.log(rect-rectt);//-6: 30-36
/////////////////////////////////////////task two///////////////////////////
////////////vehicle////////
var Vehicle = function (speed,color) {
    this.speed = speed;
    this.color = color;
}
Vehicle.prototype.turnLeft = function () {
   console.log("turn left"); 
}
Vehicle.prototype.turnRight = function () {
    console.log("turn right"); 
}
Vehicle.prototype.start = function () {
    console.log("start"); 
}
Vehicle.prototype.stop = function () {
    console.log("stop"); 
} 
Vehicle.prototype.goBackward = function () {
    console.log("goBackward"); 
}
Vehicle.prototype.goForward = function () {
    console.log("goForward"); 
}
Vehicle.prototype.toString = function(){
   return "speed is "+this.speed+" ,color is "+ this.color
}
Vehicle.prototype.valueOf = function(){
    return this.speed
 }
////////////////////////bicycle/////////////
var Bicycle = function (speed,color) {
    Vehicle.call(this,speed,color)
}
Bicycle.prototype = Object.create(Vehicle.prototype)// modify the constructor for child
Bicycle.prototype.constructor = Bicycle
Bicycle.prototype.ringBell= function () {
    console.log("ring Bell");
}
Bicycle.prototype.toString = function(){
    return "speed is "+this.speed+" ,color is "+ this.color
 }
 Bicycle.prototype.valueOf = function(){
    return this.speed
 }
////////////////////Motot vehicle///////////
var MotorVehicle = function (speed,color,SizeOfEngines,LicencePlate) {
    Vehicle.call(this,speed,color)
    this.LicencePlate= LicencePlate;
    this.SizeOfEngines= SizeOfEngines;
}
MotorVehicle.prototype = Object.create(Vehicle.prototype)// modify the constructor for child
MotorVehicle.prototype.constructor = MotorVehicle
MotorVehicle.prototype.getSizeOgEngines= function () {
    return this.SizeOfEngines
}
MotorVehicle.prototype.getLicensePart= function () {
    return this.LicencePlate
}
MotorVehicle.prototype.toString = function(){
    return "speed is "+this.speed+" ,color is "+ this.color
 }
 MotorVehicle.prototype.valueOf = function(){
    return this.speed
 }
////////////////////DumpTruck///////////////
var DumpTruck = function (speed,color,SizeOfEngines,LicencePlate,LoadCapacity,numWheels,weight) {
    MotorVehicle.call(this,speed,color,SizeOfEngines,LicencePlate);

    this.numWheels= numWheels;
    this.weight= weight;
    this.LoadCapacity =LoadCapacity
}

DumpTruck.prototype = Object.create(MotorVehicle.prototype)// modify the constructor for child
DumpTruck.prototype.constructor = DumpTruck

DumpTruck.prototype.LowerLoad = function () {
    console.log("Lower load");
}
DumpTruck.prototype.RaiseLoad = function () {
    console.log("Raise load");
}
DumpTruck.prototype.toString = function(){
    return "speed is "+this.speed+" ,color is "+ this.color
 }
 DumpTruck.prototype.valueOf = function(){
    return this.speed
 }
///////////////////////////////car//////////////
var Car = function (speed,color,SizeOfEngines,LicencePlate,NumOfDoor,numWheels,weight) {
    MotorVehicle.call(this,speed,color,SizeOfEngines,LicencePlate);

    this.numWheels= numWheels;
    this.weight= weight;
    this.NumOfDoor =NumOfDoor
}

Car.prototype = Object.create(MotorVehicle.prototype)// modify the constructor for child
Car.prototype.constructor = Car

Car.prototype.SwitchOnAirCon = function () {
    console.log("SwitchOnAirCon");
}
Car.prototype.GetNumOfDoor = function () {
    console.log("Num of Door "+ this.NumOfDoor);
}
Car.prototype.toString = function(){
    return "speed is "+this.speed+" ,color is "+ this.color
 }

 Car.prototype.valueOf = function(){
    return this.speed
 }












