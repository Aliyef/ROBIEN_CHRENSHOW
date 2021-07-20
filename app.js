window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');


for(var i = 0; i < reveals.length; i++ ){


    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 90;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }

}

}

//reveal2

window.addEventListener('scroll', reveal2);

function reveal2(){
var reveals2 = document.querySelectorAll('.reveal2');


for(var i = 0; i < reveals2.length; i++ ){


    var windowheight = window.innerHeight;
    var reveal2top = reveals2[i].getBoundingClientRect().top;
    var reveal2point = 700;

    if(reveal2top < windowheight - reveal2point){
        reveals2[i].classList.add('active');
    }
    else{
        reveals2[i].classList.remove('active');
    }

}

}

//reveal3
window.addEventListener('scroll', reveal3);

function reveal3(){
var reveals3 = document.querySelectorAll('.reveal3');


for(var i = 0; i < reveals3.length; i++ ){


    var windowheight = window.innerHeight;
    var reveal3top = reveals3[i].getBoundingClientRect().top;
    var reveal3point = 2;

    if(reveal3top < windowheight - reveal3point){
        reveals3[i].classList.add('active');
    }
    else{
        reveals3[i].classList.remove('active');
    }

}

}


//java script

window.addEventListener('scroll',function(){
const value = window.scrollY;
const traktor = document.querySelector(".traktor");
traktor.style.backgroundSize  = 100 + value + "px";

});


