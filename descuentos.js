// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio,descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento
}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceVAlue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceVAlue,discountValue);
}



// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// })