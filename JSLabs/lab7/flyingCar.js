import { Car } from "./carModule.js";

export class FlyingCar extends Car{
    
     constructor(model,year,canfly=true){
        super(model,year);
        this.canFly = canfly;
     }
     toString(){
        return super.toString()+ ", I can fly";
     }
}