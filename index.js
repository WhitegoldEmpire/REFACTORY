
app.set('view engine', 'pug')
app.set('views', 'views')

const express = require("express");
const app = express();
/* app.listen(81, function() {
//   console.log("listening on 81");
// });
// or*/

app.listen(3100, () => {
  console.log("listening on 3100");
});

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

app.get("/", function (req, res) {
  res.send("Hello World");
});
//assignment
//read about require, event driven programming, and Express in js


//arrow function
app.get('/', (req, res) => {
  res.send('Hello World')
})

//a path displaying the about us page
app.get('/about', (req, res) => {
  res.send('This is about us page')
})

app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.put('/', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /user')
})


app.get('/users/Racheal', (req, res) => {
  res.send('Hellow' + req.paraams.name)
})

app.get('/first-templete', (req, res, next) => {
  //user templete to display 
  console.log("Query params", req.query)
  res.render('index')
})

//write an error page
app.get('*', (req, res) => {
  res.send('<b align="center">Error 400, please check your internet connection</b>')
})

//ASSIGNMENT:
//read about Pug, implement pug in a form displaying name, gender & other attributes etc, prepare it in a slide presentation

var nameSchema = new mongoose.Schema({
  firstName: String,
  lastNameName: String
});

var User = mongoose.model("User", nameSchema);

