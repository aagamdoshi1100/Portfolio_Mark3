Hello Team,

This is my portfolio website which contains all my Projects and blogs.

There are 3 html pages. I have used querySelectorAll to select the Document elements. Aim is to learn javascript properly. This portfolio covers all the projects that i have created to learn Js. 

#QuerySelectorAll

We can implement this by giving same class name to all the element. Below is the example that will help you to understand. In this example we will change the color of html element by using Javascript.


Ex - HTML_Page.html

<p class="Hello">This is the implementation of querySelectorAll</p>
<p class="Hello">This is Red color</p>


JS_Page.js

var ColorElement = document.querySelectorAll(".Hello");  // HTML element selected by className. This stores element as an Array.

ColorElement[0].addEventListener("mouseover", ColorGreen);  // This will select Zeroth element of an Array an will add event listener.



function ColorGreen(){

   ColorElement[0].style.color ="Green"

}


ColorElement[1].addEventListener("mouseover", ColorRed);   
function ColorRed(){

   ColorElement[1].style.color ="Red"

}




OutPut:
This is the implementation of querySelectorAll   \\Green in color

This is Red color \\ Red in color