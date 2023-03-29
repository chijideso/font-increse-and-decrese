// console.log("helllo world")
var mainHeading = document.getElementById("main-heading")
var increase = document.getElementById("btn-increase")
var decrease = document.getElementById("btn-decrease")
//  console.log(mainheading)
var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize =parseInt( initialFontSize.substr(0, (initialFontSize.length-2)));

console.log(initialFontSize)
//  var initialFont = 0
increase.onclick = function (){
     initialFontSize += 10
     mainHeading.style.fontSize = parseInt(initialFontSize)  +"px";
}
decrease.onclick = function (){
     initialFontSize -= 10
     mainHeading.style.fontSize = parseInt(initialFontSize)  +"px";
}