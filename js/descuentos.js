// Estilos css para el precio
const product__price = `
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 5px;
    text-decoration: line-through;
    color: var(--secundary);
`;

//Busqueda de cuponera
const cuponera = ['nothing20', 'nothing40', 'nothing60'];

function buscarCupon(val) {
    return cuponera.some(function(arrVal) {
      return val === arrVal;
    });
  }

// Hacer el calculo del descuento sobre el precio del producto
function calcularPrecioOferta(precio, oferta) {
    const porcentajePrecioConOferta = 100 - oferta;
    const precioOferta = (precio * porcentajePrecioConOferta)/ 100;

    return precioOferta;
}

//Recibir los datos del usuario y devolverle la información
function buttonPriceDiscount() {
    const inputP = document.getElementById("InputPrice");
    const priceValue = Number(inputP.value);

    const inputD = document.getElementById("InputDiscount");
    const discountValue = Number(inputD.value);

    const inputC = document.getElementById("InputCoupon");
    const couponValue = String(inputC.value);

    const precioConDescuento = calcularPrecioOferta(priceValue, discountValue);

    const stylePrecio = document.querySelector('.product__price');

    stylePrecio.style.cssText = product__price;

    function precios(cuponDescuento) {
        const precioFinal = calcularPrecioOferta(precioConDescuento, cuponDescuento);

        const precio = document.getElementById("Precio");
        precio.innerText = "$" + priceValue;
        const resultF = document.getElementById("ResultF");
        resultF.innerText = "$" + precioFinal;
    }

//Validar y aplicar el descuento del cupon agregado
    switch (couponValue) {
        case "nothing20":
            if (buscarCupon(couponValue) === true) {
                let cuponDescuento = 20;
                precios(cuponDescuento)
            }
            break;
        case "nothing40":
            if (buscarCupon(couponValue) === true) {
                let cuponDescuento = 40;
                precios(cuponDescuento)
            }
            break;
        case "nothing60":
            if (buscarCupon(couponValue) === true) {
                let cuponDescuento = 60;
                precios(cuponDescuento)
            }
            break;
        default:
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
            const resultF = document.getElementById("ResultF");
            resultF.innerText = "Su cupon no es valido";
            break;
    }
}
