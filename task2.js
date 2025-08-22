var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2")
var submit = document.getElementById("submit")
submit.addEventListener("click" , function(){
    container1.style.display="none";
    container2.style.display="flex";
});
 

var selected = document.getElementById("selected")
var output;

var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")

var icon1 = document.getElementById("icon1")
var icon2 = document.getElementById("icon2")
var icon3 = document.getElementById("icon3")
var icon4 = document.getElementById("icon4")
var icon5 = document.getElementById("icon5")

one.addEventListener("click",function() {
    one.style.backgroundColor="white";
    one.style.color="hsl(213, 19%, 18%)";
    icon1.style.display="flex";
    output=1;
    selected.textContent=String(output);
})
two.addEventListener("click",function() {
    one.style.backgroundColor="white";
    one.style.color="hsl(213, 19%, 18%)";
    two.style.backgroundColor="white";
    two.style.color="hsl(213, 19%, 18%)";
    icon1.style.display="flex";
    icon2.style.display="flex";
    output=2;
    selected.textContent=String(output);
})
three.addEventListener("click",function() {
    one.style.backgroundColor="white";
    one.style.color="hsl(213, 19%, 18%)";
    two.style.backgroundColor="white";
    two.style.color="hsl(213, 19%, 18%)";
    three.style.backgroundColor="white";
    three.style.color="hsl(213, 19%, 18%)";
    icon1.style.display="flex";
    icon2.style.display="flex";
    icon3.style.display="flex";
    output=3;
    selected.textContent=String(output);
})
four.addEventListener("click",function() {
    one.style.backgroundColor="white";
    one.style.color="hsl(213, 19%, 18%)";
    two.style.backgroundColor="white";
    two.style.color="hsl(213, 19%, 18%)";
    three.style.backgroundColor="white";
    three.style.color="hsl(213, 19%, 18%)";
    four.style.backgroundColor="white";
    four.style.color="hsl(213, 19%, 18%)";
    icon1.style.display="flex";
    icon2.style.display="flex";
    icon3.style.display="flex";
    icon4.style.display="flex";
    output=4;
    selected.textContent=String(output);
})
five.addEventListener("click",function() {
    one.style.backgroundColor="white";
    one.style.color="hsl(213, 19%, 18%)";
    two.style.backgroundColor="white";
    two.style.color="hsl(213, 19%, 18%)";
    three.style.backgroundColor="white";
    three.style.color="hsl(213, 19%, 18%)";
    four.style.backgroundColor="white";
    four.style.color="hsl(213, 19%, 18%)";
    five.style.backgroundColor="white";
    five.style.color="hsl(213, 19%, 18%)";
    icon1.style.display="flex";
    icon2.style.display="flex";
    icon3.style.display="flex";
    icon4.style.display="flex";
    icon5.style.display="flex";
    output=5;
    selected.textContent=String(output);
})


var timer = setTimeout(function(){
    console.log("Hello!");
},2000)
clearTimeout(timer)