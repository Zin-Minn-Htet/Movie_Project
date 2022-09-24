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

// Fetch Movie

const url = {
    apiKey : "api_key=a7340b21daf7d49dd052aa6e95cbb512",
    baseUrl : "https://api.themoviedb.org/3/discover/movie?"
};

const popularUrl = url.baseUrl+url.apiKey+"&sort_by=popularity.desc";
const imgUrl = "https://image.tmdb.org/t/p/w500/";

fetchMovie(popularUrl);

function fetchMovie(path){
    fetch(path)
    .then(res => res.json())
    .then(data => showMovie(data))
};

function showMovie(data){
    let res = data.results;
    
    res.forEach(movie =>{
        let div = document.createElement("div");
        div.className = "card";
        
        div.innerHTML = `
        <div class="img-box">
        <img src="${imgUrl+movie.poster_path}" alt="">
        </div>
        <div class="details">
        <h3>${movie.original_title}</h3>
        <span>${movie.popularity.toFixed(1)}</span>
        </div>
        <div class="overview">
        <h5>overview</h5>
        <p>
        ${movie.overview}
        </p>
        <p> 
        Released at <strong>${movie.release_date}</strong>
        </p>` ;
        
        document.querySelector(".movie-container").appendChild(div);
        
    })
}


