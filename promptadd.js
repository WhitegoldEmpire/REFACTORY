//ASSIGNMENT;write 3 functions
//function one; it multiplies two numbers
let first = prompt("enter first number")
let second = prompt("enter second number")

first = parseInt(first)
second = parseInt(second)

var mult

function multNums(first, second) {
    mult = first * second
    document.write(mult);
}
multNums(first, second)

//function 2; it adds up two numbers
let a = prompt("enter first number")
let b = prompt("enter second number")

a = parseInt(a)
b = parseInt(b)

var sum

function addNums(a, b) {
    sum = a * b
    document.write(sum);
}
addNums(2, 4)

//function 3; it subtracts one number from the other 
let c = prompt("enter first number")
let d = prompt("enter second number")

c = parseInt(c)
d = parseInt(d)

var sub

function addNums(c, d) {
    sub = c - d
    document.write(sub);
}
subNums(4, 2)