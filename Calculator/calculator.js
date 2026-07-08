let inp=document.getElementsByTagName("input")[0];

let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let clear=document.getElementById("clear");
let zero=document.getElementById("zero");
let dzero=document.getElementById("dzero");
let dot=document.getElementById("dot");
let add=document.getElementById("add");
let backspace=document.getElementById("backspace");
let equals=document.getElementById("equals");
let sub=document.getElementById("subtract");
let mul=document.getElementById("multiply");
let divide=document.getElementById("divide");

one.addEventListener("click",()=>{
    inp.value+=1
})
two.addEventListener("click",()=>{
    inp.value+=2
})  
three.addEventListener("click",()=>{
    inp.value+=3
})   
clear.addEventListener("click",()=>{
    inp.value=""
})   
zero.addEventListener("click",()=>{
    inp.value+=0
})
dzero.addEventListener("click",()=>{
    inp.value+="00"
})
four.addEventListener("click",()=>{
    inp.value+=4
})
five.addEventListener("click",()=>{
    inp.value+=5
})
six.addEventListener("click",()=>{
    inp.value+=6
})
seven.addEventListener("click",()=>{
    inp.value+=7
})
eight.addEventListener("click",()=>{
    inp.value+=8
})
nine.addEventListener("click",()=>{
    inp.value+=9
}) 
dot.addEventListener("click",()=>{
    inp.value+="."
}) 
add.addEventListener("click",()=>{
    inp.value+="+"
})
backspace.addEventListener("click",()=>{
    inp.value=inp.value.toString().slice(0,-1)
})
equals.addEventListener("click",()=>{
    inp.value=eval(inp.value)
})
sub.addEventListener("click",()=>{
    inp.value+="-"
})
multiply.addEventListener("click",()=>{
    inp.value+="*"
})
divide.addEventListener("click",()=>{
    inp.value+="/"
})