var rectangle ={
    width: 5,
    length:6,
    calcArea: function () {
                   return(this.width * this.length);
                  },
    calcPerimeter: function () {
        return(2*(this.width + this.length));
    },
    displayInfo: function () {
        console.log("the width is :"+ this.width+" ,the length is "+this.length+" ,the area is "+this.calcArea()+' ,the perimeter is '+this.calcPerimeter());
    }
}
console.log(rectangle.calcArea());
console.log(rectangle.calcPerimeter());
console.log(rectangle.displayInfo());
// 1234567890*()

// task two
var user = { 
    name:"Mayada",
    age:10,
    displayName: function () {
        console.log("hello");
    }
}

function getSetGen(obj) {    
    for (let key in obj) {
        if (typeof obj[key] != "function") {
            obj["set"+key]=function (value) {
                obj[key]= value;
            };
            obj["get"+key]=function () {
                return obj[key];
            };          
        }
      
    }
    return obj;
}
user = getSetGen(user);
console.log(user);
console.log(user.getname());
console.log(user.setname("ali"));
console.log(user.getname());

console.log(user.getage());
console.log(user.setage(55));
console.log(user.getage());




