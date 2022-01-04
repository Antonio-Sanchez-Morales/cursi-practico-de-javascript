// Codigo del Cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + " cm")

const perimetroCaudrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCaudrado + " cm")

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrada + " cm^2")
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulo");
const ladoTringulo1 = 6;
const ladoTringulo2 = 6;
const baseTriangulo = 4;
console.log("Lados del tringulo miden: " + ladoTringulo1 + " cm, " + ladoTringulo2 + " cm")
console.log("La base del triangulo mide: " + baseTriangulo + " cm")


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm")

const perimetroTriangulo = ladoTringulo1 + ladoTringulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm^2")
console.groupEnd();

// Codigo del Circulo
console.group("Circulo")

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm")
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm")
//Pi
const PI = Math.PI;
console.log("PI es: " + PI)
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm")
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2")
console.groupEnd();