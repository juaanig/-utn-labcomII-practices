//================== TAGS DEL FORM ==================
const name_user = document.getElementById('name');
const age = document.getElementById('age');
const dateBrithday = document.getElementById('dateBrithday');
const selectProvince = document.getElementById('selectProvince');
const boton = document.getElementById('save')
const botonShow = document.getElementById('showData')
const campos = document.querySelectorAll('input')
//================ FIN TAGS DEL FORM ================

//================== TAGS DEL TABLE ==================
const cuerpo = document.getElementById('bodyData')
//================ FIN TAGS DEL TABLE ================
/*
  b- Agregar un boton extra, que sirva para mostrar en el HTML los datos de la persona ingresada.

  c- Al ejercicio anterior, una vez guardado, limpiar el formulario y permitir el agregao de otra persona. 
  Almacenar los datos de las personas, cada uno en forma de objeto, en un array en una variable global. 
  Luego mostrar todos los datos en el HTML. 

*/

var datos = {}

boton.addEventListener('click',()=>{

    validacion = validar(name_user.value,age.value,dateBrithday.value,selectProvince.options[selectProvince.selectedIndex].value)
    
    if(validacion){

        datos.nombre = name_user.value ; 
        datos.edad = age.value;
        datos.cumpleaños = dateBrithday.value;
        datos.provincia = selectProvince.options[selectProvince.selectedIndex].text;
        
        for (campo of campos){
            campo.value = '';
        }

    };
    
})

botonShow.addEventListener('click',()=>{

    const row = document.createElement('tr');
    
    row.innerHTML = `
    <td>${datos.nombre}</td>
    <td>${datos.edad}</td>
    <td>${datos.cumpleaños}</td>
    <td>${datos.provincia}</td>
    `
    cuerpo.prepend(row);
    datos = {}

})

function validar(arg1,arg2,arg3,arg4){

    flag = true ;

    if (arg1 == '' || arg1.length < 8 || arg1.length > 50){
        alert('El campo debe estar completo\n y contener entre 8 y 50 caracteres');
        flag = false
    }
    if( arg2 < 18 || arg2 > 100 ){
        alert('Ingrese un numero entre 18 y 100');
        flag = false
    }
    if(arg3 == ''){
        alert('Por favor complete el campo')
        flag = false
    }
    if(arg4 == '0'){
        alert('Por favor seleccione una provincia')
        flag = false
    }

    return flag;

}

/*=============================================================================================================
Cuando se clickee en el botón GUARDAR, realizar las siguientes validaciones sobre los campos del formulario:
    - Nombre: que no este vacío, mayor a 8 letras, menor que 50 letras.
    - Edad: valor numérico mayor a 18 y menor que X (les dejo a su criterio la máxima edad).
    - Fecha: que no este vacío.
    - Provincia: que haya un valor seleccionado.

Si todas las validaciones fueron pasadas correctamente, guardar esos datos en un objeto que tenga esas propiedades
 y luego agregarlo a un listado (array) de personas. Luego de guardar la persona en el array, limpiar los campos 
 del formulario para ingresar a la persona siguiente.

Cuando se clickee en el botón MOSTRAR, confeccionar y mostrar en el HTML una tabla que tenga una columna por cada
 campo del formulario y se agreguen tantas filas como personas se hayan guardado, ubicando los datos en cada 
 columna correspondiente.

Cuando se clickee en el botón LIMPIAR, eliminar los valores dentro del listado de personas y eliminar la tabla 
renderizada en el HTML.
=============================================================================================================  */