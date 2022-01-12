


function calcularPrecioConDescuento(precio,descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento
}




function onClickButtonPriceDiscount() {
  const coupons = [
    "Ivan_puto",
    "Ivan_Humanista",
    "Ivan_lol"
  ]
  const inputPrice = document.getElementById("InputPrice");
  const priceVAlue = inputPrice.value;
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  let descuento;

  if(!coupons.includes(cuponValue)) {
    alert("El cupon " + cuponValue + " no es valido");
  } else if (cuponValue === "Ivan_puto"){
    descuento = 15;
  } else if (cuponValue === "Ivan_Humanista") {
    descuento = 30;
  } else if (cuponValue === "Ivan_lol") {
    descuento = 25;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceVAlue,descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con  el cupon de descuento es: $" + precioConDescuento;
}


