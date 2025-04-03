function log(...e){
    console.log(...e);
}

log("Radhe Radhe");


let heartCont = document.querySelector(".heart-cont");
let heartImg = document.querySelector(".heart");
let videoCont = document.querySelector(".video-cont");

heartImg.addEventListener("click",()=>{
    heartCont.style.display = "none";
    videoCont.style.display = "flex";
})





