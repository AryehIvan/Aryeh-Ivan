let i = 0;
let txt = 'Amal Levi';
let speed = 200;
function typeWriter(){
    if(i < txt.length){
        document.getElementById('naming').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed)
    }
}

typeWriter();



$(document).ready(function(){     
    $('.sidenav').sidenav(); 
    $('.single-item').slick({
        dots:true,
        infinite: true,
        arrows:false,
    }); 
});

function goBack(){
    window.history.back();
}

mybutton = document.getElementById("myBtn");
window.onscroll = function(){
    scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop> 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
