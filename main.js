
alert("Click The Apple to Earn Points")

let cpt = 0;


function Point(){  
    cpt = cpt+1;
    document.getElementById("points1").innerHTML=cpt;
    return cpt;
}  


function Hide1(){
    document.getElementById("1").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("2").style.display="block";
} 

function Hide2(){
    document.getElementById("2").style.display="none";
    document.getElementById("1").style.display="none";
    document.getElementById("3").style.display="block";
} 
function Hide3(){
    document.getElementById("2").style.display="none";
    document.getElementById("3").style.display="none";
    document.getElementById("1").style.display="block";
} 