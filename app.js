const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn")
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const rand = Math.floor(Math.random()*colors.length);
    console.log(colors[rand]);
    document.body.style.backgroundColor = colors[rand];
    color.textContent = colors[rand];
});