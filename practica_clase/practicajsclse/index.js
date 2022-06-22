//seleccionamos los elementos del document HTML
const salida = document.getElementById('numero');
const less = document.getElementById('less');
const plus = document.getElementById('plus');
var contador = 0;

//Agregamos el evento onclick a los botones
less.addEventListener('click',()=>{
    contador -= 1;
    salida.innerHTML = contador; 
});

plus.addEventListener('click',()=>{
    contador += 1;
    salida.innerHTML = contador 
});