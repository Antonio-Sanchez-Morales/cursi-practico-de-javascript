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