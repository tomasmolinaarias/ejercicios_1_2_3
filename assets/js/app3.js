
const valor_1 = document.getElementById("valor1")
const valor_2 = document.getElementById("valor2")
const boton_suma = document.getElementById("btn-sumar") 
const boton_resta = document.getElementById("btn-restar")
const resultado = document.querySelector(".resultado")

boton_suma.addEventListener("click",()=>{
    const sumando = parseInt(valor_1.value) + parseInt(valor_2.value)
    resultado.innerHTML = sumando;
});
boton_resta.addEventListener("click",()=>{
    const restar = parseInt(valor_1.value) - parseInt(valor_2.value)
    resultado.innerHTML = restar;
    if(restar<0){
        resultado.innerHTML = 0;
    }
});

