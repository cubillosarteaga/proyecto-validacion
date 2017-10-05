# Tarjeta de crédito válida

###### Crear una web que le pida al usuario, mediante un método, que ingrese el número de una tarjeta de crédito para así confirmar su validez según el algoritmo de LUHN.

### Ejecución

###### Mediante un método mostrar en pantalla una ventana de diálogo, un mensaje que solicita al usuario que introduzca algo. Una vez ingresado el número de la tarjeta aplicar una función para invertir este grupo de números y así iniciar con la fórmula solicitada. Arrojando un nuevo conjunto de elementos invertidos, luego se procede a recorrer cada uno de estos elementos para localizar la posición par y  multiplicar por dos cada posición. Posteriormente se buscan las posiciones impares y sumar cada número con el producto resultante de la multiplicación anterior. Finalmente avisar si la tarjeta es válida o no.

### Construcción
+ **solicitar** = usuario ingrese algún dato (número);
+ **verificar si** dato ingresado es un número;
+ **sino** **retornar una alerta** que indique lo que está ingresando corresponde o no;
+ **si** corresponde seguir con lo siguiente;
+ **función** validarTarjeta = (arreglo, número);
+ **revertir** = x(parametro1, parametro2);
+ **nuevoNumero** = arreglo con los números invertidos;
+ **tamaño** = numero.longitud;
+ ultimaPosicion = tamaño -1;
+ **para**(inicio = ultimaPosicion; inicio <=0; inicio --);
+ nuevo.arrojar(nuevoNumero[inicio]);
+ (para cada número par multiplicar)
+ nuevoNúmeroMultiplicar = arreglo vacío;
+ y= 0;
+ **para**(inicio = 0; inicio <=nuevoNúmero.longitud; inicio ++);
+ **si** el residuo es igual a 0, entonces * por 2.
+ (para cada número impar sumar)
+ nuevoNúmeroSumar= arreglo vacío;
+ x=0
+ **para**(inicio = 1; inicio <=nuevoNúmero.longitud; inicio +2);
+ **si** el residuo es igual a 0, entonces + producto de posicion par;
+ **llamar** a la función;

### Ejemplo

```javascript
var reverse = function(array){
	var newNumber= [];
	var size = number.length;
}
```

#### Link

_![diagrama validación](https://github.com/cubillosarteaga/proyecto-validacion/blob/master/diagrama%20tarjeta%20valida.jpg?raw=true)_


**Este archivo es la versión 0.0.1** 

