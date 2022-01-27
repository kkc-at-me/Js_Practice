#!/bin/env node
"strict mode";

class Car{
	constructor(Brand){
	 this.brand = Brand;
        }
        get Brand(){
	 return "This car is of "+ this.brand;
        }

}

class  Model extends Car{
	constructor(Brand,CarName){
          super(Brand);
          this.name = CarName;
        }
        showCarname(){
	console.log("Car Name : "+this.name);

        }



} 

const sale = new Model("Chevrolet","sale");
console.log(sale.Brand);
sale.showCarname();
