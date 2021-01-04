var btn = document.querySelector("#clap-btn")
var count = document.querySelector("#clap-count")
var clap=1

btn.addEventListener("click",eventHandler =>{
    clap++
    count.innerText=clap
    
})