const express = require("express");
const app = express();
/* app.listen(81, function() {
//   console.log("listening on 81");
// });
// or*/

app.listen(3000, () => {
  console.log("listening on 3000");
});

app.get("/", function(req, res) {
  res.send("Hello World");
});

//arrow function
app.get('/', (req,res) =>{
  res.send('Hello World')
}
)
//a path displaying the about us page
app.get('/about', (req, res) => {
  res.send('This is about us page')
}
)