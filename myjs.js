var proj = document.querySelector("#projects");
var blg = document.querySelector("#blogs");
var Home = document.querySelector("#home");

proj.addEventListener("click",Pagehandler);

function Pagehandler(){
    window.location.href = "Projects.html";

}

blg.addEventListener("click",Blghandler);

function Blghandler(){
    window.location.href = "Blogs.html";

}

Home.addEventListener("click",HomePage);

function HomePage(){
    window.location.href = "index.html";

}