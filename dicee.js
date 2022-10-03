var random1=Math.floor(Math.random()*6)+1;
var imag= "dice"+random1+".png";
console.log(random1)
var imgsrc ="images/"+imag;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc)
var random2=Math.floor(Math.random()*6)+1;
var imag= "dice"+random2+".png";
console.log(random1)
var imgsrc ="images/"+imag;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imgsrc)

if(random1>random2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS 🎯"
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="PLAYER 2 WINS 🎯"
}
else{
    document.querySelector("h1").innerHTML="DRAW🏳️🏳️"

}