
/*methods of creating objectExpression
1. literal method
2.constructor METHOD
3.FACTORY METHOD
 */
/*
function phone(model, brand, color, batteryLife, category) {
  this.model = model;
  this.brand = brand;
  this.color = color;
  this.batteryLife = batteryLife;
  this.category = category;
}

let PHONE1 = new phone("A-01", "itel", "black", "2000hrs", "katorch");
let PHONE2 = new phone("GM216", "Iphone", "roseGold", "4000hrs", "smart");

console.log(PHONE1);

//CREATE MULTIPLE OBJECTS USING CONSTRUCTOR METHOD
function woman(figure, age, color, occupation, name) {
  this.figure = figure;
  this.age = age;
  this.color = color;
  this.occupation = occupation;
  this.name = name;
}

let WHITEGOLD = new woman("2", "23", "chocolate", "doctor", "racheal");
let SANDRA = new woman("4", "25", "dark-brown", "banker", "nanteza");
let CHRISTINE = new woman("3", "28", "brown", "lawyer", "nherza");
console.log(WHITEGOLD, SANDRA, CHRISTINE);
//constructor method is advantageous over others, because youcan use only one template and yet create multiple objects with that method.

//using classes
// class person(){
// constructor(){
//     this.name= "jackson"
//     this.age
//     this.gender
// }
// digest(){
//     console.log("iam digesting")
// }
// }

// digest(){
//         console.log("iam digesting")
//     }

class Person {
  constructor(givenName, passedAge, gender) {
    this.name = givenName;
    this.age = passedAge;
    this.gender = gender;
  }
}
let shayo = new Person("Ahmed Shayo", 26, "male");
console.log(shayo);

function girl(cosmetic, age, favcolor, phone) {
  this.cosmetic = true;
  this.age = age;
  this.favcolor = favcolor;
  this.phone = phone;
}

let Goretti = new girl("true", "29", "pink", "itel");
console.log(Goretti);*/


//11th november

class Car {
  constructor(gcolor, gspeed) {
    this.color = gcolor;
    this.speed = gspeed;
  }

  ignite() {
    console.log("iam igniting");
  }
  start() {
    console.log("iam starting");
  }
  break() {
    console.log("iam breaking");
  }
  stop() {
    console.log("iam stoping");
  }
}

let benz = new Car("red", 190);
console.log(benz.color);

//refactory rural devlopment bank
class Account {
    constructor(gaccountName, gaccountType, gaccountBalance) {
        this.accountName = gaccountName;
        this.accountType = gaccountType;
        this.accountBalance = gaccountBalance;
    }

    creditAccount(amount) {
        if this.accountBalance
        this.accountBalance = this.accountBalance - amount ;
        console.log('you have withdrawn ...',amount);

        if this.accountBalance = this.accountBalance - amount >50; 
        return ('you have exceeded the minimal withdraw amount ...')
    }

    debitAccount(amount) {
        this.accountBalance = this.accountBalance + amount;
        console.log();
    }
    deleteAccount() {
        console.log("iam breaking");
    }
    checkBalance() {
        console.log("iam stoping");
    }
}

let benz = new Car("red", 190);
console.log(benz.color);
