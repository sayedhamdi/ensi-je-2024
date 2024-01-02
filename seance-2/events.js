
window.addEventListener("DOMContentLoaded",main)

function main(){

    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    
    btn1.addEventListener("click", darkMode);
    
    function darkMode() {
        if(document.body.style.color =="black"){
            document.body.style.color="white";
            document.body.style.background="black"
            btn1.innerText= "light mode !"
        }else{
            document.body.style.color="black";
            document.body.style.background="white"
            btn1.innerText= "dark mode !"

        }
       
    }
    
    btn2.addEventListener("mouseover", fnc2);
    
    function fnc2() {
        alert("bonjour taadit fou9 el btn2");
    }
    
}