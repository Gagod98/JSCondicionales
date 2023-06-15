/***Solicitar al usuario que responda a la pregunta 
 * (“¿Eres bellisimo/a?”), en caso de contestar sí, 
 * responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.***/

let bellisimo = "";
bellisimo = prompt ("Eres bellisimo? Reponde Si o No");
if (bellisimo == "Si") {
    console.log("Ciertamente");
} else if (bellisimo == "No") {
    console.log("No te creo");
}else{
    console.log("respuesta no valida");
}


/*** Solicitar al usuario un número, y determinar si es divisible 
 entre dos o no. Mostrando al usuario un mensaje de “x número es 
 divisible entre 2” o “x núm no es divisible entre 2”. ***/


let numero = "";
numero = parseInt (prompt("Pon un numero para saber si es divisible entre 2"));

numeroDividido = (numero % 2);

if (numeroDividido === 0 ) {
    console.log (`${numero} es divisible entre 2`)
} else { 
    console.log (`${numero} no es divisible entre 2`)
}

/**  Crear un programa que determine si un número introducido en un 
 * Prompt es par o no, la respuesta será mostrada en un Alert */

let numeroPar = "";
numeroPar = parseInt (prompt("Pon un numero para saber si es par"));

numeroDividido = (numeroPar % 2);

if (numeroDividido === 0 ) {
    console.log (`${numeroPar} es par`);
} else { 
    console.log (`${numeroPar} no es par`);
};

/**  Solicitar al usuario un número de cliente. Si el número es el 1000, 
 * imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje 
 * “Lo sentimos, sigue participando”. */


let numeroMil = "";
numeroMil = parseInt (prompt("Pon un numero para ganar un premio"));

if (numeroMil === 1000) {
    console.log ("Ganaste un premio");
}else {
    console.log ("Lo sentimos sigue participando");
};


/** Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
 * No considerar el caso en que ambos números son iguales. */

let numeroUno = "";
let numeroDos = "";

numeroDos = parseInt (prompt("Ingresa un numero para saber si es mayor o menor"));
numeroUno = parseInt (prompt("Ingresa un numero para saber si es mayor o menor"));

if (numeroUno > numeroDos) {
    console.log (`${numeroUno} es mayor que ${numeroDos}`);
}else {
    console.log (`${numeroDos} es mayor que ${numeroUno}`);
};


/** Solicitar al usuario que ingrese tres números y mostrar 
 * cuál de los tres es el número mayor. 
 * Considerar el caso en que 2 números sean iguales. */

let numUno = "";
let numDos = "";
let numTres = "";

numUno = parseInt (prompt("Ingresa un numero para saber si es mayor o menor"));
numDos = parseInt (prompt("Ingresa un numero para saber si es mayor o menor"));
numTres = parseInt (prompt("Ingresa un numero para saber si es mayor o menor"));

if (numUno > numDos & numTres < numUno) {
    console.log (`${numUno} es el numero mayor`);        
} else if (numDos > numUno & numTres < numDos) {
    console.log (`${numDos} es el numero mayor`);     
} else if (numTres > numUno & numDos < numTres) {
    console.log (`${numTres} es el numero mayor`);
} else if (numTres === numUno & numUno === numDos) {
    console.log (`Todos los numero son iguales`);
} else if (numUno === numDos) {
    console.log (`El primero y el segundo numero son iguales`);
} else if (numDos === numTres) {
    console.log (`El segundo y el tercer numero son iguales`);
} else if (numTres === numUno) {
    console.log (`El primer y el tercer numero son iguales`);
};

/**Requerir al usuario que ingrese un día de la semana e 
 * imprimir un mensaje si es lunes, otro mensaje diferente 
 * si es viernes, otro mensaje diferente si es sábado o domingo. 
 * Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */

let dia ="";

dia = prompt("Ingresa un dia de la semana")

if (dia == "lunes") {
    console.log ("Un Corazon frio necesita un sonrisa calurosa");
}else if (dia =="viernes") {
    console.log ("El corazon es el musculo mas fuerte");
}else if (dia == "sabado") {
    console.log ("A farrear");
}else if (dia == "domingo") {
    console.log ("Que guayabo");
}else{
    console.log ("A estudiar");
};

/** Solicitar al usuario una calificación (entre 1 y 10). 
 * Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” 
 * si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. */

let calificacion = "";

calificacion = parseInt (prompt("Pon una calificacion entre 1-10"));

if (calificacion >= 11) {
    alert("Error, ingrese un numero valido")
}else if(calificacion <= 6) {
    console.log ("Reprobado");
} else if (calificacion <= 8) {
    console.log ("Regular");
} else if (calificacion === 9){
    console.log ("Bien");
}else if (calificacion === 10){
    console.log ("Excelente");
}; 

/** Escribe un programa que responda a un usuario que quiere 
 * comprar un helado en una conocida marca de comida rápida cuánto 
 * le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, 
el programa le indicará “no tenemos este topping, lo sentimos.” y a 
continuación le informará el precio del helado sin ningún topping. */

let helado = 50;
const oreo = 10;
const KitKat = 15;
const brownie = 20;
let topping = ""

topping = parseInt (prompt("Selecciona tu topping \n 1.Oreo \n 2.KitKat \n 3.Brownie \n escoge un numero de topping"))

if (topping === 1) {
    helado = (oreo + helado)
    console.log (`El valor del helado con el topping es: ${helado}`)
} else if (topping === 2) {
    helado = (KitKat + helado)
    console.log (`El valor del helado con el topping es: ${helado}`)
} else if (topping === 3) {
    helado = (brownie + helado)
    console.log (`El valor del helado con el topping es: ${helado}`)
} else {
    console.log (`no tenemos este topping, lo sentimos. \n El valor del helado es: ${helado}`)
};
/**  Un conocido portal de educación en tecnología está ofreciendo programas para 
 * aprender a desarrollar aplicaciones. Escribe un programa que le indique a la 
 * persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento 
correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto 
gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */

alert ("Bienvenido");
let descuentos = "";
let programs = "";
const course = 4999;
const carrera = 3999;
const master = 2999;
programs = parseInt (prompt ("Que programa quieres cursar ? \n 1. Course: $4999 MXN \n 2. Carrera $3999 MXN \n 3.Master: $2999 MXN \n selecciona el numero de tu curso"));

if (programs === 1) {
    descuentos = parseInt (prompt ("Tienes alguna beca ? \n 1. Beca Facebook \n 2.Beca Google \n 3.Beca Jesua \n selecciona el numero de tu beca, en caso de no tener presiona enter"));
    if (descuentos === 1) {
        console.log (`${course * 0.8} precio mensual`);
        console.log (`${(course * 0.8) * 2} Este es el precio total con descuentos y los 2 meses`);
    }else if (descuentos === 2) {
        console.log (`${course * 0.85} precio mensual`);
        console.log (`${(course * 0.85) * 2} Este es el precio total con descuentos y los 2 meses`);
    }else if (descuentos === 3) {
        console.log (`${course * 0.5} precio mensual`);
        console.log (`${(course * 0.5) * 2} Este es el precio total con descuentos y los 2 meses`);
        } else {
        alert ("opcion no valida");
    }
} else if (programs === 2) {
    descuentos = parseInt (prompt ("Tienes alguna beca ? \n 1. Beca Facebook \n 2.Beca Google \n 3.Beca Jesua \n selecciona el numero de tu beca, en caso de no tener presiona enter"));
    if (descuentos === 1) {
        console.log (`${carrera * 0.8} precio mensual`);
        console.log (`${(carrera * 0.8) * 6} Este es el precio total con descuentos y los 6 meses`);
    }else if (descuentos === 2) {
        console.log (`${carrera * 0.85} precio mensual`);
        console.log (`${(carrera * 0.85) * 6} Este es el precio total con descuentos y los 6 meses`);
    }else if (descuentos === 3) {
        console.log (`${carrera * 0.5} precio mensual`);
        console.log (`${(carrera * 0.5) * 6} Este es el precio total con descuentos y los 6 meses`);
    } else {
        alert ("opcion no valida");
    }
}else if (programs === 3) {
    descuentos = parseInt (prompt ("Tienes alguna beca ? \n 1.Beca Facebook \n 2.Beca Google \n 3.Beca Jesua \n selecciona el numero de tu beca, en caso de no tener presiona enter"));
    if (descuentos === 1) {
        console.log (`${master * 0.8} precio mensual`);
        console.log (`${(master * 0.8) * 12} Este es el precio total con descuentos y los 12 meses`);
    }else if (descuentos === 2) {
        console.log (`${master * 0.85} precio mensual`);
        console.log (`${(master * 0.85) * 12} Este es el precio total con descuentos y los 12 meses`);
    }else if (descuentos === 3) {
        console.log (`${master * 0.5} precio mensual`);
        console.log (`${(master * 0.5) * 12} Este es el precio total con descuentos y los 12 meses`);
    } else {
        alert ("opcion no valida");
    }
}else { 
 console.log ("No es una opcion valida")
};

/** Realizar un programa que ayude a calcular el total a pagar de acuerdo a la 
 * distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
 * tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de 
litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */


const coche = 0.20
const moto = 0.10 
const bus = 0.5
let kmRecorridos = "";
let sumita = "";
transporte = parseInt (prompt("Que vehiculo tienes \n 1.Carro \n 2.Moto \n 3.Bus"));



if (transporte === 1) {
    kmRecorridos = parseInt (prompt("Ingresa el numero de kilometros recorridos"));
    sumita = (kmRecorridos * coche)
    console.log (sumita)
    if (sumita <= 100) {
        console.log (sumita + 5)
    } else if (sumita > 100) {
        console.log (sumita + 10)
    }
} else if (transporte === 2) {
    kmRecorridos = parseInt (prompt("Ingresa el numero de kilometros recorridos"));
    sumita = (kmRecorridos * moto)
    console.log (sumita)
    if (sumita <= 100) {
        console.log (sumita + 5)
    } else if (sumita > 100) {
        console.log (sumita + 10)
    }
}else if (transporte === 3) {
    kmRecorridos = parseInt (prompt("Ingresa el numero de kilometros recorridos"));
    sumita = (kmRecorridos * bus)
    console.log (sumita)
    if (sumita <= 100) {
        console.log (sumita + 5)
    }   else if (sumita > 100) {
        console.log (sumita + 10)
    } 
};