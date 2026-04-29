let boton=document.getElementById("boton")
let boton2=document.getElementById("boton2")
let suma=document.getElementById("suma")
let contador=0

boton.addEventListener("click",mostrar)
boton2.addEventListener("click",mostrar2)

function mostrar (){

    suma.textContent=contador++

}
function mostrar2 (){

    suma.textContent=contador--

}