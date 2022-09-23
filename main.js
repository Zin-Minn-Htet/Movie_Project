// Menu toggle 

document.querySelector("#menu-toggle").addEventListener("click",()=>{
    document.querySelector("#nav-menu").classList.toggle("nav-active");
})

// Scroll Toggle

window.addEventListener("scroll",()=>{
    if(scrollY > 300){
        document.querySelector("header").style.backgroundColor ="#9bbe25";
        document.querySelector(".scroll-top").style.bottom = "30px";
    }
    else{
        document.querySelector("header").style.backgroundColor ="#ffd900";
        document.querySelector(".scroll-top").style.bottom = "-1000px"
    }
})

document.querySelector(".scroll-top").addEventListener("click",()=>{
    window.scroll(0,0);
})

// Setting Toggle

document.querySelector("#setting-toggle").addEventListener("click",()=>{
    document.querySelector(".setting-box").classList.toggle("setting-box-active");
});

let images = Array.from(document.querySelectorAll(".setting-box img"));

images.map((image)=>{
    image.addEventListener("click",()=>{
        images.forEach((img)=>{
            img.style.opacity = "1";
        })
        document.querySelector(".landing-img").src = image.src;
        image.style.opacity = "0.5";
    })
})

