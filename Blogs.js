

var ShowMore = document.querySelector("#readmore");
var Show = document.querySelector("#show");




ShowMore.addEventListener("click", ReadMore);

 function ReadMore(){

    Show.style.display = "block";
    ShowMore.style.display = "none";
 }
 
 
 
 var proj = document.querySelector("#projects");

proj.addEventListener("click",Pagehandler);

function Pagehandler(){
    window.location.href = "Projects.html";

}

var Home = document.querySelector("#home");
Home.addEventListener("click",HomePage);

function HomePage(){
    window.location.href = "index.html";

}