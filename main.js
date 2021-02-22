const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audio = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const deg = 45;
const len = lists.length-1;
let i = 0; 
let num = 0; 
let active = 0; 

for(let el of lists) {  
    let pic = el.querySelector(".pic");  

    el.style.transform = `rotate(${deg* i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++; 

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

play.addEventListener("click", function(){
    let isActive = this.parentElement.parentElement.parentElement.parentElement.classList.contains("on");
    if(isActive){
        this.parentElement.parentElement.previousElementSibling.classList.add("on");
        this.parentElement.nextElementSibling.play(); 
    }              
});
pause.addEventListener("click", function(){
    let isActive = this.parentElement.parentElement.parentElement.parentElement.classList.contains("on");
    if(isActive){
        this.parentElement.parentElement.previousElementSibling.classList.remove("on");
        this.parentElement.nextElementSibling.pause();
    }
            
});
load.addEventListener("click", function(){
    let isActive = this.parentElement.parentElement.parentElement.parentElement.classList.contains("on");
    if(isActive){
        this.parentElement.parentElement.previousElementSibling.classList.add("on");
        this.parentElement.nextElementSibling.load();   
        this.parentElement.nextElementSibling.play(); 
    }          
});
}


prev.addEventListener("click", function(){
    initMusic();
    num++;  
    frame.style.transform = `rotate(${deg* num}deg)`;    

    (active == 0 ) ? active = len : active--;
    activation(active, lists);    
});

next.addEventListener("click", function(){
    initMusic();
    num--;   
    frame.style.transform = `rotate(${deg* num}deg)`;   

    (active == len ) ? active = 0 : active++; 
    activation(active, lists);
});

function activation(index, lists){
    for( let el of lists){
        el.classList.remove("on");
    }
    lists[index].classList.add("on");
}

function initMusic(){
    for( let el of audio ){
        el.pause();
        el.load();
        el.parentElement.previousElementSibling.classList.remove("on");
    }
}





