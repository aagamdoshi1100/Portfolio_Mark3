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

var blg = document.querySelector("#blogs");
blg.addEventListener("click",Blghandler);

function Blghandler(){
    window.location.href = "Blogs.html";

}





var Hproj = document.querySelector("#Hprojects");
var Hblg = document.querySelector("#Hblogs");

Hproj.addEventListener("click",HProjecthandler);

function HProjecthandler(){
    window.location.href = "Projects.html";

}


Hblg.addEventListener("click",HBlghandler);

function HBlghandler(){
    window.location.href = "Blogs.html";

}


