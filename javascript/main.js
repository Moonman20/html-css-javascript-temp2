let statBar = document.querySelector(".skills");
let skillspan = document.querySelectorAll(".skills span");

window.onscroll= function() {
if (window.scrollY >= statBar.offsetTop - 200) {
    skillspan.forEach((span)=>{
        span.style.width=span.dataset.progress;
    });

};
};


let theShuffle = document.querySelectorAll(".shuffle li");
let thephotos = document.querySelectorAll(".imgs-container .box img");


theShuffle.forEach((li)=>{
    li.addEventListener("click", filter);
    li.addEventListener("click", removeImg);

})

function filter () {
    theShuffle.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active");
    })
    
}


function removeImg () {
    thephotos.forEach((img)=>{
        img.style.display="none";
    }
    )
    document.querySelectorAll(this.dataset.cat).forEach((el)=>{
    el.style.display="flex";
    })
};


// let slide = document.querySelector(".slider");
// let slidimg = document.querySelectorAll(".slider img");
// // buttons
// let nextBtn = document.querySelector("#nextbtn");
// let prevBtn = document.querySelector("#prevbtn");
// // counter 
// let counter = 1;
// let size = slidimg[0].clientWidth; 


// slide.style.transform = 'translatex('+ (-size *counter) + 'px)';

// // btn listener 

// nextBtn.addEventListener("click" , ()=>{
//     if(counter >= slidimg.length -1) return;
//     slide.style.transition = "transform 0.4s ease-in-out";
//     counter ++;
//     slide.style.transform = 'translatex('+ (-size *counter) + 'px)';
// })

// prevBtn.addEventListener("click" , ()=>{
//     if(counter <= 0 ) return;
//     slide.style.transition = "transform 0.4s ease-in-out";
//     counter --;
//     slide.style.transform = 'translatex('+ (-size *counter) + 'px)';
// })

// slide.addEventListener("transitionend" , ()=>{
//     if(slidimg[counter].id === "lastclone"){
//         slide.style.transition = "none";
//         counter = slidimg.length - 2;
//         slide.style.transform = 'translatex('+ (-size * counter) + 'px)';
//     }
//     if(slidimg[counter].id === "firstclone"){
//         slide.style.transition = "none";
//         counter = slidimg.length - counter;
//         slide.style.transform = 'translatex('+ (-size * counter) + 'px)';
//     }

// })

