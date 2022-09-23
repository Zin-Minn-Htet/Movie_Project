// Menu toggle 

document.querySelector("#menu-toggle").addEventListener("click",()=>{
    document.querySelector("#nav-menu").classList.toggle("nav-active");
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

