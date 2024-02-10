/* BIKRAM JS*/

// ----  Pair Programming

//Varibles
let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = PI * 2;

//Booleanos
let booleanoAnd = booleano1 === booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 =
  (booleano1 || booleano2) === (booleano1 || (!booleano1 && !booleano2));

//Operadores
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Bucles

let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta10_2++;
}

let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

let sumaPares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

// ----  Proyecto Individual

//Variables
let variableValorNumerico = 9;
const MiNombre = "Vero";
const MiNumeroFav = 8;

//Booleanos
let booleanoOr = booleano1 || booleano2;
let booleanoMix1 =
  (booleano1 && TAU / 2 === PI) ||
  variableValorNumerico >= MiNumeroFaviNumeroFav;
let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = variableValorNumerico > 0 || -(MiNumeroFav * TAU);

//Operadores
let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta = MiNumeroFav - variableValorNumerico;
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

//Bucles

let contarHasta10 = 0;
while (contarHasta10 < 10) {
  contarHasta10++;
}

let preI = 0;
let preJ = 0;

for (let i = 0; i <= 10; i++) {
  preI += ++preJ;
}

let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares += i;
  }
}
