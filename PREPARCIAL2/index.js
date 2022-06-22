//============= CONST PARA LA PRIMERA PARTE DEL TP =============
const valueInput = document.getElementById('pesos');
const selectDivisa = document.getElementById('selector-divisa');
const resultado = document.getElementById('result');
const boton = document.getElementById('btn-calc');
var listaDivisas = [220,260]
//==============================================================  
//============= CONST PARA LA SEGUNDA PARTE DEL TP =============
const nuevaMoneda = document.getElementById('n-divisa')
const valorNuevaMoneda = document.getElementById('n-valorDivisa')
const botonAdd = document.getElementById('btn-add');
const nuevasOpciones = document.createElement('option')
//============================================================== 

//==================== PRIMERA PARTE DEL TP ==================== 
function validar(arg1,arg2,arg3){
    flag= true;

    switch(arg3){

        case 1: 
            if(arg1 == ''){
                alert('Por favor complete el campo')
                flag = false 
            }
        
            if(arg2 == '0'){
                alert('Por favor seleccione una divisa')
                flag = false
            }
            break;
        case 2:
            if(arg1 == ''){
                alert('Por favor complete el campo')
                flag = false 
            }
        
            if(arg2 == ''){
                alert('Por favor complete el campo')
                flag = false
            }
    }
    return flag
}

function calcular(){

    let valoresSelect = selectDivisa.options[selectDivisa.selectedIndex].value;
    let validacion = validar(valueInput.value,valoresSelect,1);
    if(validacion){

        let cantidad = parseInt(valueInput.value);
        let divisor = 1

        console.log(listaDivisas)

        for (i in listaDivisas){
            let j = parseInt(i)

            if (j+1 == selectDivisa.selectedIndex ){
                divisor = listaDivisas[i];
                break;
            }    
        }

        total = cantidad/divisor;
        resultado.innerHTML = total.toFixed(2);
        valueInput.value = '' 
    }

}

boton.addEventListener('click',calcular);

//==================== SEGUNDA PARTE DEL TP ==================== 
botonAdd.addEventListener('click',()=>{

    let nombreMoneda = nuevaMoneda.value
    let costoMoneda = valorNuevaMoneda.value
    let validacion = validar(nombreMoneda,costoMoneda,2);
    if(validacion){

        selectDivisa.add(new Option(nombreMoneda, nombreMoneda))
        listaDivisas.push(parseInt(costoMoneda))
    }

})