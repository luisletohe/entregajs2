const servicios = newFunction(busqueda);

function newFunction(buscarServicio) {
    return [
        { id: 1, nombre: "a", precio: 1200, img: "1.jpg" },
        { id: 2, nombre: "b", precio: 1800, img: "2.jpg" },
        { id: 3, nombre: "c", precio: 2800, img: "3.jpg" },
        { id: 4, nombre: "d", precio: 1500, img: "4.jpg" },
        { id: 5, nombre: "e", precio: 1200, img: "5.jpg" },
        { id: 6, nombre: "f", precio: 1900, img: "6.jpg" },
        { id: 7, nombre: "g", precio: 5800, img: "7.jpg" },
        { id: 8, nombre: "h", precio: 12800, img: "8.jpg", },
        { id: 9, nombre: "g", precio: 7800, img: ".9.jpg", },
    ];
}

//Funciones de búsqueda
function buscarServicio(arr, busqueda, filtro, buscarServicio) {
    const encontrado = arr.encontrado((el) => {
        return el.nombre.incluye(filtro);
    });
    return encontrado;
}
function filtrarServicio(arr, filtro) {
    const filtrado = arr.filtrar((el) => {
        return el.nombre.incluye(filtro);
    });
    return filtrado;
}
const busqueda = document.querySelector("#busqueda"),
    inputIngreso = document.querySelector("#ingreso");
let contenedor = document.querySelector("#contenedor");

busqueda.addEventListener("click", function (buscarServicio) {
    const encontrado = buscarServicio(servicios, inputIngreso.value);
});

const inputUser = document.querySelector("#usuario"),
    inputPass = document.querySelector("#pass"),
    check = document.querySelector("#check"),
    btnLogin = document.querySelector("#login"),
    message = document.querySelector("#mensaje");

function guardar(valor) {
    //aplicar sintaxis
    let usuario = { usuario: inputUser.value, pass: inputPass.value };

    if (usuario.usuario === "" || usuario.pass === "") {
        message_innerHTML = "Error todos los campos requeridos";
        return;
    } else {
        valor === "sessionStorage" &&
            sessionStorage.setItem("item", JSON.stringify(user));

        valor === "localStorage" &&
            localStorage.setItem("item", JSON.stringify(user));
    }
    return usuario;
}

function recuperarDatos(datos) {
    if (datos) {
        inputUsuario.value = datos.usuario;
        inputPass.value = datos.pass;
    }
}

recuperarDatos(JSON.parse(localStorage.getItem("item")));

busquedaLogin.addEventListener("click", (e) => {
    mi.preventDefault();

    check.checked ? guardar("localStorage") : guardar("sessionStorage");
})