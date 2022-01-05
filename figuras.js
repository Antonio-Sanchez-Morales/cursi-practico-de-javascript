// Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
}


function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Codigo del Triangulo


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}


function areaTriangulo(base, altura) {
  return (base * altura) / 2
}

console.groupEnd();

// Codigo del Circulo
console.group("Circulo")

// Radio

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//Pi
const PI = Math.PI;
console.log("PI es: " + PI)
//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI

}

//Area
function areaCirculo(radio) {
  return (radio * radio) * PI
}

console.groupEnd();

// Aqui interactuamos con el HTML

//Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


//Triangulo
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("InputLado1");
  const value1 = Number(lado1.value);
  const lado2 = document.getElementById("InputLado2");
  const value2 = Number(lado2.value);
  const base = document.getElementById("InputBase");
  const value3 = Number(base.value);

  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const altura = document.getElementById("InputAltura");
  const valueAltura = Number(altura.value);
  const base = document.getElementById("InputBase");
  const valueBase = Number(base.value);

  const area = areaTriangulo(valueBase,valueAltura)
  alert(area);
}

//Circulo
function calcularPerimetroCirculo() {
  const radio = document.getElementById("InputRadio");
  const value = radio.value;
  const perimetro = perimetroCirculo(value)
  alert(perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById("InputRadio");
  const value = radio.value;
  const area = areaCirculo(value);
  alert(area);
}