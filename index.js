/* mr osman
my first js example

my first variable
let num1 = 10;

//second variable
var num_2 = 20;

//capturing the sum of two vars
let num3 = num1 + num_2;
console.log(num3);

var greentrees = 20;
var yellowtrees = 30;
let totalTrees = greentrees * yellowtrees;
console.log(totalTrees);

var greentrees2 = 20;
var yellowtrees1 = 30;
let totalTrees2 = greentrees2 / yellowtrees1;
console.log(
  "total number of trees is",
  greentrees2,
  "/",
  yellowtrees1,
  "=",
  totalTrees2
);

var a_trees = 20;
var b_trees = 30;
let sumTrees = a_trees - b_trees;
console.log("this is the answer \n" + b_trees + "-" + a_trees + "=", sumTrees); */



/* FUNCTIONS by Mr Osman 10th september
//arithmetic operators eh addition(+) subtraction(-) division(/) multiplication(*)
var rach=10,white=20,gold =30

let family= rach+white+gold
console.log(family);


let sisters= rach*white
console.log(sisters);

let brothers= white%gold
console.log('the modulus of brothers is',white,'%',gold, '=',brothers );

let z=family++
console.log(z);


let h=++family
console.log(h);

var z = 10;

let a = --z;
console.log(a);

let b = z--;
console.log(b);

let c = z--;
console.log(c);

let sum=20
let sub=50
//finite mathematics operators; 
//modulus, about the remainder after the calcualtion
let add =sum%sub
console.log(add);

let add2 =sub%sum
console.log('this is the answer 20%50 =', add2);*/

//logical operators
//using && for 'and' as well as using || to mean OR`

//function definition
/*function addNums() 
{
    let e=num1=200,
         num2=100,
         num3=num1 + num2;
         console.log('the sum is',num3);
         return num3;
}

//function invocation

/*ASSIGNMENT 2
define 3 functions
func1 shud add numbers 30,60,100
func2 shud multiply the result from func1 by 2
func3 shud find the remainder of func2 result divided by 15.

//function1
function add() {
 // this function computes the sum of 3 variables  
  var a = 30,
    b = 60,
    c = 100,
    total1 = a + b + c;
  return total1;
}

function multiply() {
  // this function multiplies the result of function1 by 2 
  let total2 = add() * 2;
  return total2;
}

function modulus() {
  //this function divides the remainder of function2 by 15 
  let total3 = multiply() % 15;
  console.log("function3: total3 is 380%15=", total3);
}
modulus(); 
 



  MR OSMAN fRIDAY 11th october
STATEMENT Isa validinstruction to a computer to do a particular task, 
EXPRESSION; ifa statement has some computations it becomes an expression
 A FUNCTION is a group of expressions/ or itis a block of code that defines a task
 typecasting: changinga data type
  Console.log is an in-built function that displays/prints the result of an execution of code 
  return "is the last statement in any code" no code can run after the retun function 
the === is strict and checks if the data types of all the variables its compairing are the same, then the value similarity
the ==it checks if variables are of the same VALUE! IT doesnt check to see if the data types of whats its compairing is the same..
 
THE ! means NOT, so in case of the function below
var a=5, b=10, c="5"
a!=b is TRUE; //because a is indeed not b.since 5 is not equal to 10, as defined in the variables

NOTE; a number has a greater precedence over a string.
so a>=c is TRUE //because 5 is greater than "5"

a<=c is TRUE

x%2// the answer is 1, becoz 5devide by 2= gives a reminder of 1

x- = 1 is the shortcut of saying x=x-1 so answer is 4
x + = 1 //answer is 6, refer to above explanation
x* = 5 //answer is 1
x%=2 // answer is remainder1 
!(a>b) //answer is TRUE, becoz. the function in the brackets is fales, so NOT faLse becomes TRUE.
(A!=B)&&(a<b) //TRUE
(a<b)||(a==b) //TRUE

NOTE; 
|| means OR,  && means AND
for the OR operature, atleast one of the statements is supposed to be true, to conclude that its TRUE

(a===b)||(a==b) // 

given
var a=10, b=5

NOTE: the operators ? and : are alternative conditional statements. the ? means otherwise, the : means else 


assignment of the day;
1. write a paramenterised function that takes 2 typest of test-marks, eg trest1 and test2, it checks for the best done of the two


READ ABOUT:what is a calling function, what is difference between function definition And function invocation.
  formal parameters and arguments/parameters
   

//PARAMETERS

// defining a function with specific parameters
function Os(a, b, c) // this function calls a function with multiple arguments 
{
  let x = a + b + c
  return x
}
let Os(10, 20, 30) //arguments/parameters
let Os(40, 50, 60)
console.log(Os(10, 20, 30) ,Os(40, 50, 60));  */


/** monday14th oct
migration from vanillajs to es6 js, function declaration)

ARROW FUNCTIONS*/

let w = (x, y, z) => {
  let v = x + y + z;
  console.log(v);
}
w(10, 20, 30)

//CODE is a group of statements instructing a computer to carry out diff tasks
//a BLOCK is a group of code

//CONDITIONAL STATEMENTS
//example of an IF STATEMENT
let num1 = 20,
  num2 = 40
if (num1 > num2) {
  console.log('you have passed!')
} else {
  console.log('heaven is not for you!')
}

//aN ES6 function that calculates pay-as you earn(p.a.e) tax

let calculatePae = (salary) => {
  if (salary >= 130000) {
    let payee = salary * (30 / 100)
    console.log(payee)
    return payee
  } else {
    console.log()
  }
}
calculatePae(60000)

//ASSIGNMENT
//create a function that calculates the salary and compares p.a.e salary for 2 employees to know whpo is paying more pae.
//paue represents pay-as-you-earn.

let calculatePaue = (salary1, salary2) => {
  if ((salary1 >= 130000) && (salary2 >= 130000)) {
    var payee1 = salary1 * (30 / 100)
      var payee2 = salary2 * (30 / 100)

    let comparesals = (payee1 > payee2 ? salary1 : salary2)
    console.log('the highest taxable pay is', comparesals)
 
  }
}
calculatePaue(300000, 400000)

 
var mangoes =[20,40,60,80]
for (var item=0; item<=3; item++) {
  const mango = mangoes[item];
  console.log(mango);
}