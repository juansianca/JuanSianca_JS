/*
DIFERENCIA CON ENTREGABLE OPCIONAL1 !!!!! Toda la información que el usuario ingresa se va almacenando en variables, que luego son gardadas en un array previamente definido. Este array es mostrado por consola al finalizar
 el proceso con el usuario. 

En este SIMULADOR INTERACTIVO primero se le solicita al usuario ingresar su nombre, luego se explica que a continuación podran ingeresar
SI o NO dependiendo si quieren comprar el producto descripto en cada una de las 5 ventanas, al finalizar con los 5 productos se pregunta la forma de pago
la cual puede ser, 1 - efectivo, 2 - debito o 3 - credito al cual se le suma un 10%. 

Al finalizar se muestra el monto total de la compra el cual es la suma de los valores de los productos para los cuales se ingreso SI + IVA + Intereses si aplicaran. 

El último alert es un agradecimiento por haber comprado. 

Respecto a la consigna, se aplican ciclos con validaciones de los datos ingresados (si o no para los productos, 1,2 o3 para el metodo de pago), y funciones para realizar los calculos. 

*/

class Carrito {
    constructor(nombre,producto1,producto2,producto3,producto4,producto5,modoDePago,valorTotal,montoTotal){
    this.nombre = nombre;
    this.producto1 = producto1;
    this.producto2 = producto2;
    this.producto3 = producto3;
    this.producto4 = producto4;
    this.producto5 = producto5;
    this.modoDePago = modoDePago;
    this.montoTotal = montoTotal;
    this.valorTotal = valorTotal;
}    }

nombre = (prompt("Ingresa tu nombre"))

alert(`Hola ${nombre} a contunuación podra ingresar la palabra SI en caso de que quieras comprar el artículo mostrado en pantalla, caso contrario ingresá NO, al finalizar podrá ingresar el método de pago.`);

do {
    producto1 = (prompt("Remera, Valor (SIN IVA)= $4000, Color = Negra, Talle = XS/S/M/L/XL. Ingrese SI si la quiere adquirir.")).toLowerCase()
    producto2 = (prompt("Bermuda, Valor (SIN IVA) = $6000, Color = Beige, Talle = XS/S/M/L/XL. Ingrese SI si la quiere adquirir.")).toLowerCase()
    producto3 = (prompt("Musculosa, Valor (SIN IVA) = $5000, Color = Azul, Talle = XS/S/M/L/XL. Ingrese SI si la quiere adquirir.")).toLowerCase()
    producto4 = (prompt("Boxer, Valor (SIN IVA)= $2000, Color = Negro/Blanco, Talle = XS/S/M/L/XL. Ingrese SI si la quiere adquirir.")).toLowerCase()
    producto5 = (prompt("Medias, Valor (SIN IVA)= $1500, Color = Negra/Blanca/Gris, Talle = XS/S/M/L/XL. Ingrese SI si la quiere adquirir.")).toLowerCase()
    modoDePago = parseInt(prompt("Ingrese modo de pago 1 para Efectivo - 2 para Debito 3 para Credido (10% +)"))
    
    if((producto1 != "si" && producto1 != "no") || (producto2 != "si" && producto2 != "no") || (producto3 != "si" && producto3 != "no") || (producto4 != "si" && producto4 != "no") || (producto5 != "si" && producto5 != "no")) {
        alert("Por favor ingrese SI o NO, otros valores no son aceptados");
       
    }
    
    if (isNaN(modoDePago)) {
        alert("Método de pago incorrecto, por favor ingrese 1 para Efectivo - 2 para Debito 3 para Credido (10% +)")
    }

} while( (producto1 != "si" && producto1 != "no") || (producto2 != "si" && producto2 != "no") || (producto3 != "si" && producto3 != "no") || (producto4 != "si" && producto4 != "no") || (producto5 != "si" && producto5 != "no") || isNaN(modoDePago));

if (producto1 == "si") {
    valor1 = 4000
} else  {
    valor1 = 0
}

if (producto2 == "si") {
    valor2 = 6000
} else {
    valor2 = 0
}

if (producto3 == "si") {
    valor3 = 500
} else {
    valor3 = 0
}

if (producto4 == "si") {
    valor4 = 2000
} else {
    valor4 = 0
}

if (producto5 == "si") {
    valor5 = 1500
} else {
    valor5 = 0
}

valorTotal=(valor1+valor2+valor3+valor4+valor5)


switch(modoDePago){
    case 1:
        alert((valorTotal)*1.21);
        montoTotal=valorTotal*1.21;
        alert(`Gracias por tu compra ${nombre}!`)
        break;
    case 2:
        alert((valorTotal)*1.21);
        montoTotal=valorTotal*1.21;
        alert(`Gracias por tu compra ${nombre}!`)
        break;
    case 3:
        alert(((valorTotal)*1.21)*1.1);
        montoTotal=((valorTotal)*1.21)*1.1;
        alert(`Gracias por tu compra ${nombre}!`)
        break;
   
}

const Carrito1 = new Carrito(nombre,producto1,producto2,producto3,producto4,producto5,modoDePago,valorTotal,montoTotal) 

console.log(Carrito1)

