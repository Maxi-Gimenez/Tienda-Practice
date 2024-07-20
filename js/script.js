const spanInfoTamaño = document.getElementById('spanInfoTamaño');
const spanInfoColor = document.getElementById('spanInfoColor');


// Botones de colores
const botonesColor = document.querySelectorAll('.btnColor');
let valorSeleccionado = null;

botonesColor.forEach(boton => {
    boton.addEventListener('click', () => {
        botonesColor.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        valorSeleccionado = boton.value;
        
        if (spanInfoColor) {
          spanInfoColor.textContent = valorSeleccionado;
      }

        // Selecciona el contenedor de imágenes
        const contenedorImg = document.getElementById('image-Conteiner');

        // Elimina la imagen actual si existe
        const imagenActual = contenedorImg.querySelector(".imageActual");
        if (imagenActual) {
            contenedorImg.removeChild(imagenActual);
        }

        // Crea y agrega la nueva imagen
        const nuevaImg = document.createElement("img");
        nuevaImg.classList.add("imageActual");

        switch (valorSeleccionado) {
            case "Negro":
                nuevaImg.src = "../assets/jordan1-negras.png";
                break;
            case "Rojo":
                nuevaImg.src = "../assets/jordan1-rojas.png";
                break;
            case "Azul":
                nuevaImg.src = "../assets/jordan1-azules.jpg";
                break;
        }

        contenedorImg.appendChild(nuevaImg);
        console.log(`Color seleccionado = ${valorSeleccionado}`);
    });
});

// Botón de agregar al carrito y animación
const avisoCarrito = document.getElementById('avisoCarrito');

function agregarAlCarrito() {
    avisoCarrito.style.left = "10px";
    setTimeout(() => {
        avisoCarrito.style.left = "-200px";
    }, 3000);
}


// Botones tamaño
const botonesTamaño = document.querySelectorAll('.tamaño-num');
let valorSeleccionadoTamaño = null;

botonesTamaño.forEach(botonTam => {
    botonTam.addEventListener('click', () => {
        botonesTamaño.forEach(b => b.classList.remove('activo'));
        botonTam.classList.add('activo');
        valorSeleccionadoTamaño = botonTam.value;
        
        if (spanInfoTamaño) {
          spanInfoTamaño.textContent = valorSeleccionadoTamaño;
      }

        console.log(`Tamaño seleccionado = ${valorSeleccionadoTamaño}`);
    });
});

// Cantidad
const cantidadMenos = document.getElementById('cantidadMenos');
const cantidadMas = document.getElementById('cantidadMas');
const pContador = document.getElementById('cantidad-num');
const precioZapaP = document.getElementById('precio-numero');
const precioInfo = document.getElementById('precioInfo')
let contador = 1;
const precioZapa = 358000;

pContador.textContent = contador;

const formatearNumero = (numero) => {
    return numero.toLocaleString('es-ES');
};
function actualizarTotal() {
  let precioTotal = precioZapa * contador;
  document.querySelector('.precioInfo').textContent = "$" + formatearNumero(precioTotal);
}

// Suma cantidad de zapas
cantidadMas.addEventListener("click", () => {
    contador++;
    pContador.textContent = contador;
    let cuantasJordan = document.getElementById('cuantasJordan');
    cuantasJordan.textContent = contador + "x";
    actualizarTotal();
});

// Resta cantidad de zapas
cantidadMenos.addEventListener("click", () => {
    if (contador > 1) {
        contador--;
        pContador.textContent = contador;
        let cuantasJordan = document.getElementById('cuantasJordan');
        cuantasJordan.textContent = contador + " x";
        actualizarTotal();
    }
});
actualizarTotal();


// Ver carrito
document.getElementById('verCarritoAviso').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('verCarrito').style.display = 'block';
});

document.getElementById('carritoCerrar').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('verCarrito').style.display = 'none';
});

