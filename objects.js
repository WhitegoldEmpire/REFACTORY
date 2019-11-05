//defining objects
// var student = {
//     name: rach,
//     age: 67,
//     dob: 1889
// }

//another style with constructor

function student(name, age, dob)
 {
  this.name = name;
  this.age = age;
  this.dob = dob;
}

let racheal = new student("rachel", 23, "2nd july");
let phyllis = new student("phyllis", 89, "6th oct");

console.log(racheal, phyllis);

// a class is the same as an object in javascript
// a function is the first class of an object
