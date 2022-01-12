


function calcularPrecioConDescuento(precio,descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento
}




function onClickButtonPriceDiscount() {
  const coupons = [
    {
      name: "Ivan_puto",
      discount : 10,
    },
    {
      name: "Ivan_Humanista",
      discount: 20,
    },
    {
      name: "Ivan_lol",
      discount: 30,
    },
  ]
  const inputPrice = document.getElementById("InputPrice");
  const priceVAlue = inputPrice.value;
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;
  const isCouponValueValid = function (coupon) {
    return coupon.name === cuponValue;
  };
  const userCoupon = coupons.find(isCouponValueValid)

  if(!userCoupon) {
    alert("El cupon " + cuponValue + " no es valido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceVAlue,descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con  el cupon de descuento es: $" + precioConDescuento;
  }


}


