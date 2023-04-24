var head=document.querySelector(".main"); 
var navbtn=document.querySelector(".navbtn"); 

var toggleNav=()=>{
    head.classList.toggle("active")
}

navbtn.addEventListener("click",()=>toggleNav())