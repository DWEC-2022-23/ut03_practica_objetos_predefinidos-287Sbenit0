//Caja de texto de tipo fecha o promt que al pulsar el botón "reyes magos"
//llame a la función reyesMagos(Fecha) que nos devuelve cuántos días quedan para que vengan los Reyes Magos y lo muestre por pantalla 

function reyesmagos(){
    let hoy = new Date();
let añorey = hoy.getFullYear();

if (hoy.getMonth() == 11 && hoy.getDate() > 25) {
  añorey = añorey + 1;
}

let diarey = new Date(añorey, 11, 25);
let diamil = 1000 * 60 * 60 * 24;

let quedan = Math.ceil(
  (diarey.getTime() - hoy.getTime()) /
   (diamil)
);
alert("quedan " + quedan +
                   " dias para Reyes Magos");
                   return;
}





//Botón que al pusar muestre en un alert la fecha y hora actuales de la siguiente formaFecha:
//Hoy es martes, 22 de septiembre de 2020 y son las 12:34 horas

function fechahoy(){
    var now = new Date();
    var dia = now.getDay();
    var mes = now.getMonth() + 1;
    var año = now.getFullYear();
    var hora = now.getHours();
    var minu = now.getMinutes();
    
alert( 'Hoy es '+dia+' de '+mes+' de '+año+' y son las '+hora + ':'+ minu)
return;
}

//Caja de texto de tipo número o promt que nos solicita un radio.
//Este llamará a la función calcularAreaCirculo(radio) que devuelve el área.
//Mostrar en un alert el área de un círculo y la longitud de una circunferencia a partir del radio que introduzca el usuario. 
//Debes mostrarlo con 2 decimales. Comprobar que introduce un número como radio.


function circulo(){
var a = parseFloat(prompt("Ingrese el radio del círculo:"))
	const p = 3.14 // Como Π es constante, lo configuro como constante
	var b = 2*p*a//perímetro
	var c = a*p*a//zona
	if(Boolean(a)){	// Determinar si está vacío
		
		if( isNaN(a)){	// Determinar si es un valor
		alert("error de entrada")
		}
		else{
			document.getElementById("zc").value = b.toFixed(2)// toFixed (2) Simplifica dos lugares decimales
			document.getElementById("mj").value = c.toFixed(2)
		}
		
	}
}


//Mediante cajas de texto o un promt, al pulsar el botón "aleatorio" llame a la función calcularAleatorio(comienzo,fin) que 
//mostrará por pantalla un número aleatorio generado entre los dos números introducidos.

function calcularAleatorio(){
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
  var ran=Math.random() * (a - b) + b;
  var fin=Math.trunc(ran);
  alert("tu numero random es "+fin*-1);
  return;
}

//Añadir una caja de texto y los siguientes botones que implementan las siguientes funcionalidades:
//Imprimir la primera mitad de los caracteres de la cadena de la caja de texto. mitadCar(cadena)
//Imprimir el último carácter de la caja de texto. ultimoCaracter(cadena)
//Imprimir la cadena en forma inversa de la caja de texto. cadenaInversa(cadena)
//Imprimir cada carácter del String de la caja de texto separado con un guión cadenaGuiones(cadena)
//Imprimir la cantidad de vocales almacenadas en la caja de texto. contarVocales(cadena)
//5a
function mitadcaracter(cadena){
    let aux = "";
    var cadena= document.getElementById("cadena").value;
    
    for(i=Math.floor(cadena.length/2); i<cadena.length;i++){
        aux=aux+cadena[i];
    }
    alert("la mitad de tu cadena es : "+aux);
    return;

}
//5b
function ultimoCaracter(){
  var cadena= document.getElementById("cadena").value;
  var aux=cadena[cadena.length-1];
  alert("El ultimo caracter de su cadena es : "+ aux);
  return;
}

//5c

function inversa(){
  let cadena= document.getElementById("cadena").value;
  let aux="";
  for(i=cadena.length-1;i>=0;i--){
    aux+=cadena[i];
  }
  alert("Tu cadena invertida seria : "+aux);
  return;
}

//5d

function cadenaGuion(){
  let cadena= document.getElementById("cadena").value;
  cadena=cadena.replace(/\s+/g,'');
  let aux="";
  for(i=0;i<cadena.length;i++){
    aux+=cadena[i]+"-";
  }
  alert("La cadena espaciada con guiones seria : "+aux);
  return;
}
