var btn = document.querySelector("#clap-btn")
var count = document.querySelector("#clap-count")
var clap=5
btn.addEventListener("click",eventHandler =>{
    clap++
    count.innerText=clap
})