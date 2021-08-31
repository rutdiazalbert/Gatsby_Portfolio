/**

* ¿Usamos la comparación dentro del if o la extraemos a una variable?

*

* Ejercicio: Si tengo mas de 65 años, he trabajado mas de 35 con un sueldo de 2000 y no soy menor de edad

* la variable mePuedoJubilar será true.

*/
var edad = 68;
var soyMenor = edad < 18;
var tiempoTrabajado = 32;
var sueldo = 2000;
var mePuedoJubilar = edad > 65 && tiempoTrabajado > 35 && sueldo >= 2000 && !soyMenor //soyMenor == false

if(mePuedoJubilar) {
    console.log("Enhorabuena, puedes jubilarte");
} else {
    console.log("No puedes jubilarte");
}