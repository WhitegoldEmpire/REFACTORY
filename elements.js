// there are 5 methods of accessing htmlelements from javascripts. and thy aare allaccessed via document.

const demoId = document.getElementById("demo"); //getelementbyid
const democlass = document.getElementsByClassName("demo");//getelementbyClassName
const demoTag = document.getElementsByTagName("article");
const demoQuery = document.querySelector("#demo-query");
const demoQueryAll = document.querySelectorAll(".demo-query-all");

//changing the boarder color of all elements with class demo ,id demo to purple
demoId.style.border = "2px solid purple";

for (i = 0; i < democlass.length; i++){
    democlass[i].style.border = "2px solid orange";

}
 
  //changing the boarder color of all Tags,
for (i = 0; i < demoTag.length; i++)
{
    demoTag[i].style.border = '2px solid red'
}

demoQueryAll.forEach(query =>{query.style.border='2px solid green'});