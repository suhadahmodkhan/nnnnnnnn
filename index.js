const height= document.getElementById("height")
const base = document.getAnimations("base")
const calculate = document.getElementById("calculate")
const area = document.getElementById("area")


calculate.addEventListener("click", function(){
    console.log("calculate button clicked", height.value,base.value)
    let totalArea = 0.5 * height.value * base.value;
    console.log(totalArea)
    area.innerText= totalArea;
})