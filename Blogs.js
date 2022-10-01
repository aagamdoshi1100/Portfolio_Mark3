

var ShowMore = document.querySelector("#readmore");
var ShowMore2 = document.querySelector("#readmore2");
var Show = document.querySelector("#show");

var Show2 = document.querySelector("#show2");


ShowMore.addEventListener("click", ReadMore);

 function ReadMore(){

    Show.style.display = "block";
    ShowMore.style.display = "none";
 }
 
 ShowMore2.addEventListener("click", ReadMore2);

 function ReadMore2(){

    Show2.style.display = "block";
    ShowMore2.style.display = "none";
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