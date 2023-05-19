export class Car{

    constructor(model,year){
        this.model= model;
        this.year= year;
    }
    toString(){
        return `car model is ${this.model}, car year is ${this.year}`
    }
}