const servicios = [
    { id: 1, nombre: "a", precio: 1200, img: "1.jpg" },
    { id: 2, nombre: "b", precio: 1800, img: "2.jpg" },
    { id: 3, nombre: "c", precio: 2800, img: "3.jpg" },
    { id: 4, nombre: "d", precio: 1500, img: "4.jpg" },
    { id: 5, nombre: "e", precio: 1200, img: "5.jpg" },
    { id: 6, nombre: "f", precio: 1900, img: "6.jpg" },
    { id: 7, nombre: "g", precio: 5800, img: "7.jpg" },
    { id: 8, nombre: "h", precio: 12800, img: "8.jpg",},
    { id: 9, nombre: "g", precio: 7800, img: ".9.jpg",},
];

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
    const encontrado = arr. encontrado((el) => {
        return el.nombre.incluye(filtro);
    });
    return encontrado;
}
function filtrarServicio(arr, filtro) {
    const filtrado = arr. filtrar ((el) => {
        return el . nombre . incluye (filtro);
    });
    return filtrado;
}
const busqueda = document.querySelector("#busqueda"),
    inputIngreso = document.querySelector("#ingreso");
let contenedor = document.querySelector("#contenedor");

busqueda.addEventListener("click", () => {
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

    if (usuario . usuario === "" || usuario . pass === "") {
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
    mi . preventDefault();

    check.checked ? guardar("localStorage") : guardar("sessionStorage");
});

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const persona = {
    nombre: "luis",
    apellido: "Arca",
    edad: 19,
    manager: {
        nombre: "florencia",
        apellido: "coria",
    },
};



const { nombre, apellido, edad, manager } = persona;


const { nombre: nombremanager, apellido: apeamanager } = manager;


const desestructurar = ({ nombre, edad }) => {
    console.log(nombre + " " + edad);
}; 

const numeros = [1, -2, 3, 8, 4, 5, 6, 7, 0, 4, -23];
const torresPrincipales = ["florencia", "Mirta", "luis", "ale", "rodolfo"],
    torresSecundarios = ["kevin", "camila", "katherine", "david", "francisco"];


const torresStaff = [...torresPrincipales, ...torresSecundarios]; //reemplaza el concta

//console.log(torresStaff);

const torresOBJ = {
    ...torresPrincipales,
};
//console.log(torresOBJ["0"]); //Atencion para llamar a los atributos uso notacion [""]

const suite = {
    nombre: "el yaque",
    precio: 12800,
    disponible: 20,
};
console.log(suite);

const romanaNuevo = {
    ...suite,
    nombre: "romana",
    precio: 1750,
    _disponible: "170",
    get disponible() {
        return this._disponible;
    },
    set disponible(value) {
        this._disponible = value;
    },
};

console.log(romanaNuevo);

function sumar(...nums) {
    console.log(nums);
    return nums.reduce((acc, num) => acc + num, 0)
}

console.log(sumar(1, 2, 3, 6, 2, 9));
console.log(sumar(99));
console.log(sumar(5, 4, 2));



function newFunction() {
    def; suma_promedio(numeros);
    ""; "";
    Calcula; la; sumar; y; el; promedio; de; una; lista; de; números.

        Argumentos;
    numeros--; una; lista; de; números;

    Una; tupla; que; contiene; la; suma; y; el; promedio; de; los; números; en; la; lista;
    ""; "";
    suma = 0;
    for (num in numeros)
        suma += num;
    promedio = suma / len(numeros); if (numeros)
        ; else
        0;
    return (suma, promedio);
}