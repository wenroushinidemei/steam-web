let store = document.querySelector(".store");
let recommend = document.querySelector(".recommend");
let category = document.querySelector(".category");
let drop = document.querySelector(".drop");
let drop2 = document.querySelector(".drop2");
let drop3 = document.querySelector(".drop3");


store.onmouseenter= function(){
    drop.style.visibility = "visible"
    drop.style.opacity = "1"
    drop.style.transition = "all 0.3s";  
}
drop.onmouseenter= function(){
    drop.style.visibility = "visible"
    drop.style.opacity = "1"
    drop.style.transition = "all 0.3s";
}
store.onmouseleave = function(){
    drop.style.opacity = "0"
    drop.style.transition = "all 0.3s";
    drop.style.visibility = "hidden"
}
drop.onmouseleave = function(){
    drop.style.opacity = "0"
    drop.style.transition = "all 0.3s";
    drop.style.visibility = "hidden"
}



recommend.onmouseenter= function(){
    drop2.style.visibility = "visible"
    drop2.style.opacity = "1"
    drop2.style.transition = "all 0.3s";  
}
drop2.onmouseenter= function(){
    drop2.style.visibility = "visible"
    drop2.style.opacity = "1"
    drop2.style.transition = "all 0.3s";
}
recommend.onmouseleave = function(){
    drop2.style.opacity = "0"
    drop2.style.transition = "all 0.3s";
    drop2.style.visibility = "hidden"
}
drop2.onmouseleave = function(){
    drop2.style.opacity = "0"
    drop2.style.transition = "all 0.3s";
    drop2.style.visibility = "hidden"
}



category.onmouseenter= function(){
    drop3.style.visibility = "visible"
    drop3.style.opacity = "1"
    drop3.style.transition = "all 0.3s";  
}
drop3.onmouseenter= function(){
    drop3.style.visibility = "visible"
    drop3.style.opacity = "1"
    drop3.style.transition = "all 0.3s";
}
category.onmouseleave = function(){
    drop3.style.opacity = "0"
    drop3.style.transition = "all 0.3s";
    drop3.style.visibility = "hidden"
}
drop3.onmouseleave = function(){
    drop3.style.opacity = "0"
    drop3.style.transition = "all 0.3s";
    drop3.style.visibility = "hidden"
}