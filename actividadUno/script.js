const seleccionarEjercicio = ()=>{
  const seleccion = prompt("Seleccione el número de ejercicio a ejecutar del 1 al 13: ");
  const ejercicioSeleccionado = parseInt(seleccion);
  return ejercicioSeleccionado;
}

var contadorEjercicio1 = 0;
var contadorEjercicio2 = 0;
var contadorEjercicio3 = 0;
var contadorEjercicio4 = 0;
var contadorEjercicio5 = 0;
var contadorEjercicio6 = 0;
var contadorEjercicio7 = 0;
var contadorEjercicio8 = 0;
var contadorEjercicio9 = 0;
var contadorEjercicio10 = 0;
var contadorEjercicio11 = 0;
var contadorEjercicio12 = 0;
var contadorEjercicio13 = 0;
var inicio = true;

const ejercicios = {
  ejercicio1: function(){
    contadorEjercicio1++;
    const numero = parseInt(prompt("Ingrese un número: "));
    let pares = 0;
    let impares = 0;

    if (numero > 0) {
      for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
          pares++;
        } 
        else {
          impares++;
        }
      }
      console.log(`Cantidad de números pares: ${pares}`);
      console.log(`Cantidad de números impares: ${impares}`);
    } else {
      console.log("Ingrese un número mayor que 0");
    }
  },
  ejercicio2:function(){
    contadorEjercicio2++;
    var numero = parseInt(prompt("Ingresa un número:"));
    if (Number(numero)) {
      if (numero < 0) {
        console.log("No se permite ingresar numeros negativos(< 0)");
      } else {
        let factorial = 1;
      for (let i = 1; i <= numero; i++) {
          factorial *= i;
        }
      console.log(`El factorial de ${numero} es: ${factorial}`);
      }
    } else {
      console.log("Incorrecto, verifique el numero ingresado");
    }
  },
  ejercicio3: function(){
    contadorEjercicio3++;
      let contraseña = prompt("ingrese su contraseña")
      if( contraseña == "secreto123"){
        console.log("acceso consedido")
      }
      else{ 
        console.log("acceso denegado")
      }
  },
  ejercicio4: function(){
    contadorEjercicio4++;
    var numeroTabla = Number(prompt('Ingrese un numero: '))
    for (let index = 1; index <= 10; index++) {
    console.log(numeroTabla + " * " + index + " = " + (index * numeroTabla)); }
  },
  ejercicio5: function(){
    contadorEjercicio5++;

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    function adivinarNumero() {
      const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
      intentos++;

      if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        console.log("Escribe un número entre 1 y 100");
        adivinarNumero(); 
      } else if (numeroUsuario < numeroAleatorio) {
        console.log("Demasiado bajo. Intenta nuevamente.");
        adivinarNumero();
      } else if (numeroUsuario > numeroAleatorio) {
        console.log("Demasiado alto. Intenta nuevamente.");
        adivinarNumero();
      } else {
        console.log(" Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
      }
    }
    adivinarNumero();
  },
  ejercicio6: function(){
    contadorEjercicio6++;
    var numero = prompt("Ingresa un número:");
    var cantidadDigitos = numero.length;
    console.log("El número ingresado tiene " + cantidadDigitos + " dígitos.");
  },
  ejercicio7: function(){
    contadorEjercicio7++;
    function esPrimo(numero) {
      if (numero <= 1) {
          return false;
      }
      if (numero <= 3) {
          return true;
      }
      if (numero % 2 === 0 || numero % 3 === 0) {
          return false;
      }
      let i = 5;
      while (i * i <= numero) {
          if (numero % i === 0 || numero % (i + 2) === 0) {
              return false;
          }
          i += 6;
      }
      return true;
    }
    var N = parseInt(prompt("Ingresa el valor de N para sumar los primeros N números primos:"));
    var suma = 0;
    var contador = 0;
    var numeroActual = 2; 
  
    while (contador < N) {
      if (esPrimo(numeroActual)) {
          suma += numeroActual;
          contador++;
      }
      numeroActual++;
    }
    console.log("La suma de los primeros " + N + " números primos es: " + suma);
  },
  ejercicio8: function(){
    contadorEjercicio8++;
    var primero = 0;
    var segundo = 1;

      if (!isNaN(numeroTerminos) && numeroTerminos > 0) {
        console.log("Secuencia de Fibonacci:");

        if (numeroTerminos >= 1) {
          console.log(primero);
        }
        if (numeroTerminos >= 2) {
          console.log(segundo);
        }

        for (var i = 3; i <= numeroTerminos; i++) {
          var siguiente = primero + segundo;
          console.log(siguiente);
          primero = segundo;
          segundo = siguiente;
        }
      } else {
        console.log("Ingrese un número mayor que 0");
      }
  },
  ejercicio9: function(){
    contadorEjercicio9++;
    var palabra = prompt("Por favor, ingrese una palabra:");

    function invertirCadena(cadena) {
      return cadena.split('').reverse().join('');
    }

    if (palabra) {
      palabra = palabra.toLowerCase().replace(/\s/g, '');

      var palabraInvertida = invertirCadena(palabra);

      if (palabra === palabraInvertida) {
        console.log("La palabra ingresada es un palíndromo.");
      } else {
        console.log("La palabra ingresada no es un palíndromo.");
      }
    } else {
      console.log("Ingrese una palabra válida.");
    }
  },
  ejercicio10: function(){
    contadorEjercicio10++;
    function celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    } 
    function fahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    } 
    var direccion = prompt("¿Quieres convertir de Celsius a Fahrenheit (C->F) o de Fahrenheit a Celsius (F->C)?");
    if (direccion === "C->F") {
    var celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    var fahrenheit = celsiusToFahrenheit(celsius);
  
    console.log(celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit.");
    } else if (direccion === "F->C") {
  
    var fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
      var celsius = fahrenheitToCelsius(fahrenheit);
      console.log(fahrenheit + " grados Fahrenheit equivalen a " + celsius + " grados Celsius.");
    } else {
     
    console.log("Dirección de conversión no válida. Debes ingresar 'C->F' o 'F->C'.");
    }
  },
  ejercicio11: function(){
    contadorEjercicio11++;
    function esVocal(caracter) {
      return ['a', 'e', 'i', 'o', 'u'].includes(caracter.toLowerCase());
    }
    var frase = prompt("por favor, Ingrese una frase:");
  
    var cantidadVocales = 0;
    var cantidadConsonantes = 0;
  
    for (var i = 0; i < frase.length; i++) {
      var caracter = frase.charAt(i);
  
      if (/[a-zA-Z]/.test(caracter)) {
  
    if (esVocal(caracter)) {
              cantidadVocales++;
          } else {
              cantidadConsonantes++;
          }
      }
    }
              cantidadConsonantes++;
              cantidadConsonantes
    console.log("La cantidad de vocales es: " + cantidadVocales);
    console.log("La cantidad de consonantes es: " + cantidadConsonantes);
  },
  ejercicio12: function(){
    contadorEjercicio12++;
    var base = parseFloat(prompt("Ingrese el numero base: "));
    var potencia = parseInt(prompt("Ingrese la potencia a la que quieres elevar el numero: "));
    var resultado = Math.pow(base, potencia);
    console.log(base + " elevado a la potencia " + potencia + " es igual a " + resultado);
  },
  ejercicio13: function(){
    contadorEjercicio13++;
    function obtenerOpcionComputadora() {
      var opciones = ["piedra", "papel", "tijera"];
      var indiceAleatorio = Math.floor(Math.random() * 3);
      return opciones[indiceAleatorio];
    }
    function determinarGanador(opcionUsuario, opcionComputadora) {
      if (opcionUsuario === opcionComputadora) {
          return "Empate";
      } else if (
          (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
          (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
          (opcionUsuario === "tijera" && opcionComputadora === "papel")
      ) {
          return "Usuario";
      } else {
          return "Computadora";
      }}
    var opcionUsuario = prompt("Elija: piedra, papel o tijera").toLowerCase();
  
    if (opcionUsuario !== "piedra" && opcionUsuario !== "papel" && opcionUsuario !== "tijera") {
      console.log("Opción no válida. Elige piedra, papel o tijera.");
    } else {
      var opcionComputadora = obtenerOpcionComputadora();
      var ganador = determinarGanador(opcionUsuario, opcionComputadora);
  
      console.log("El Usuario eligio: " + opcionUsuario);
      console.log("El sistema eligio: " + opcionComputadora);
      console.log("RESULTADO DEL JUEGO: " + ganador);
  }
  }, 
    
}

const ejecutarEjercicio = (numero)=>{
  switch (numero) {
    case 1:
      alert("Suma los numeros pares e impares, CONFIRMAR");
      ejercicios.ejercicio1();
      break;
    case 2:
      alert("Factorial de un numero, CONFIRMAR");
      ejercicios.ejercicio2();
      break;
    case 3:
      alert("Validacion de contraseña, CONFIRMAR");
      ejercicios.ejercicio3();
      break;
    case 4:
      alert("Tablas de multiplicar, CONFIRMAR");
      ejercicios.ejercicio4();
      break;
    case 5:
      alert("Adivinar un numero, CONFIRMAR");
      ejercicios.ejercicio5();
      break;
    case 6:
      alert("Te dira cuantos digitos elejiste, CONFIRMAR");
      ejercicios.ejercicio6();
      break;
    case 7:
      alert("Seleccionado'La suma de los numeros primos', CONFIRMAR");
      ejercicios.ejercicio7();
      break;
    case 8:
      alert("Podras ver la secuencia de una sentencia Fibonacci, CONFIRMAR ");
      ejercicios.ejercicio8();
      break;
    case 9:
      alert("Escribe una palabra y te dire si es palindromo, CONFIRMAR");
      ejercicios.ejercicio9();
      break;
    case 10:
      alert("Conversion de temperatura fahrenheit/celcius, CONFIRMAR");
      ejercicios.ejercicio10();
      break;
    case 11:
      alert("Contar las vocales y las consonantes, CONFIRMAR");
      ejercicios.ejercicio11();
      break;
    case 12:
      alert("Potencia y base de un numero, CONFIRMAR");
      ejercicios.ejercicio12();
      break;
    case 13:
      alert("Juego piedra ,papel o tijera, CONFIRMAR");
      ejercicios.ejercicio13();
      break;
    default:
      break;
  }
}

//consultar ejercicios
function consultarEjercicio(){
  let ejercicioSeleccionado = seleccionarEjercicio();
  const keys = Object.keys(ejercicios);
  const cantidadEjercicios = keys.length;
  if (
    !isNaN(ejercicioSeleccionado) &&
    ejercicioSeleccionado >= 1 &&
    ejercicioSeleccionado <= cantidadEjercicios)
    { console.log(`Ejecutando => ${ejercicioSeleccionado}`);
    ejecutarEjercicio(ejercicioSeleccionado);
  } else {
    console.log("Selección no válida. Intente nuevamente.");
    consultarEjercicio();
  }
}
let salir =false;


//ejercicios que mas se seleccionaron 
function masMenosEjecuto(){
var ejerciciosContadores = [
  { ejercicio: "Ejercicio 1", contador: contadorEjercicio1 },
  { ejercicio: "Ejercicio 2", contador: contadorEjercicio2 },
  { ejercicio: "Ejercicio 3", contador: contadorEjercicio3 },
  { ejercicio: "Ejercicio 4", contador: contadorEjercicio4 },
  { ejercicio: "Ejercicio 5", contador: contadorEjercicio5 },
  { ejercicio: "Ejercicio 6", contador: contadorEjercicio6 },
  { ejercicio: "Ejercicio 7", contador: contadorEjercicio7 },
  { ejercicio: "Ejercicio 8", contador: contadorEjercicio8 },
  { ejercicio: "Ejercicio 9", contador: contadorEjercicio9 },
  { ejercicio: "Ejercicio 10", contador: contadorEjercicio10 },
  { ejercicio: "Ejercicio 11", contador: contadorEjercicio11 },
  { ejercicio: "Ejercicio 12", contador: contadorEjercicio12 },
  { ejercicio: "Ejercicio 13", contador: contadorEjercicio13 },
];

ejerciciosContadores.sort(function (a, b) {
  return b.contador - a.contador;
});

console.log("Ejercicios más seleccionado: " + ejerciciosContadores[0].ejercicio + " (" + ejerciciosContadores[0].contador + " veces)");
console.log("Ejercicios menos seleccionado: " + ejerciciosContadores[ejerciciosContadores.length - 1].ejercicio + " (" + ejerciciosContadores[ejerciciosContadores.length - 1].contador + " veces)");
}

//MENU de opciones
function elejitOpcion(){
  let opcion = Number(prompt('Elija la opción que desee: \n1 - Seleccionar ejercicio\n2 - Cuantas veces se ejecutó cada ejercicio\n3 - Cual fue el ejercicio que mas y menos se ejecutó\n4 - salir'))
  switch (opcion) {
      case 1:
          consultarEjercicio()
          break; 
      // case 2: 
      //     vecesEjecuto()
      //     break; 
      case 2:
          masMenosEjecuto()
          break;
      case 0:
      case 4:
          console.log("Has seleccionado salir");
          salir=true;
            break;
      default:
        elejitOpcion();
          break;
  }
}
if (!salir) {
  elejitOpcion();
}

