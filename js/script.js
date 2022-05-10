const borderRadius = document.querySelector(".border-radius")
const  box = document.querySelector(".box")
const  offsetX = document.querySelector(".offsetX")
const  offsetY = document.querySelector(".offsetY")
const  blur = document.querySelector(".blur")
const  spread = document.querySelector(".spread")
const  shadowColor = document.querySelector(".shadow-color")
const  out = document.querySelector(".out")
const  outset = document.querySelector(".outset")
const  inset = document.querySelector(".inset")


borderRadius.oninput = cssGeneration
offsetX.oninput = cssGeneration
offsetY.oninput = cssGeneration
blur.oninput = cssGeneration
spread.oninput = cssGeneration
shadowColor.oninput = cssGeneration
outset.oninput = cssGeneration
inset.oninput = cssGeneration

// borderRadius.addEventListener('', cssGeneration)
function cssGeneration (){
    if (outset.checked){
        box.style.borderRadius = borderRadius.value + "%"
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;


        out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; <br>`
        out.innerHTML += `-webkit-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; <br>`
        out.innerHTML = out.innerHTML + `moz-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}; <br>`
    }else {
        box.style.borderRadius = borderRadius.value + "%"
        box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset`;


        out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset;  <br>`
        out.innerHTML += `-webkit-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset;  <br>`
        out.innerHTML = out.innerHTML + `moz-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} inset;  <br>`
    }

}
cssGeneration()