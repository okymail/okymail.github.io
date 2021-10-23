
console.log ("se cargo el java");

var formulario = document.getElementsByName ('formulario') [0],
elementos = formulario.elements,
boton=document.getElementById('btn'),

/*console.log (formulario.email.value.includes('@');*/

 validaremail=function (e) {
    if (formulario.email.value == 0){
        alert("Completa tu correo electrónico");
        e.preventDefault();} 
     /*else if ( formulario.email.value.test("@") == false){
        alert("email no valido");
        e.preventDefault();}
     else {e.preventDefault();}*/



 };
    

 validarNombre=function (e) {
    if (formulario.nombre.value == 0){
        alert("Completa el campo nombre");
        e.preventDefault();}
};

validarApellido=function (e) {
    if (formulario.Apellido.value == 0){
        alert("Completa el campo Apellido");
        e.preventDefault();}
};

 validaredad= function(e) {
         if (formulario.edad.value == 0){
         alert("ingresa tu edad");
         e.preventDefault();}
         
         else if (formulario.edad.value < 18) {
             alert("debe ser mayor de edad");
             e.preventDefault();
             
         } else {e.preventDefault();}
             
         
     
 }


 validar = function (e){
    validaremail(e);
    validarNombre(e);
    validarApellido(e);
    validaredad(e);
        };


formulario.addEventListener("submit", validar);


