// Usuario debe ingresar un número de tarjeta
var request = (prompt("Por favor ingrese su número de tarjeta"));
	
	if(request === ''){
		alert("No puede ingresar un campo vacío"); // cumpliendo ciertas condiciones no puede ingresar campos vacíos.
	
    }else if (isNaN(parseInt(request.value))){
            alert('Por favor ingrese un número'); // tiene que ser un número. 
     
  }else{
  	(request === Number);
  	alert ('Opción correcta');
  }          
// Validar con método de Luhn. Para eso convertir lo que se ingresa como string a arreglo para comenzar.
 /* var reverse = function(arr){
  var newNumber = [];
  var size = newNumber.length;
  var lastPosition = size -1; //ubicarse en la última posición

   for(i = lastPosition; i>= 0; i--){
   	newNumber.push(arr[i]); // nuevo arreglo con números invertidos
 */

 //for each pair numb multiply
 var newNumberMultiply = [];
 var y = 0;
 for(i=0; i< newNumber.length; i++);
 	if(y%2 === 0){
 		var tot = newNumberMultiply[i]*2;
 	}

// for each odd number sum
 var newNumbreSum = [];
 var x = 0;
 
 for(i=1; i<newNumber.length; i+2);
 	if(x%2 === 0){
 		var total = newNumbreSum[i] + newNumberMultiply[i];
 	}


   function isValidCard;



