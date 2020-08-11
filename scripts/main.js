//Inicializamos Muuri
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
      }
});

//Creamos los arreglos que contienen las fotos por clases
const muuriSection = document.querySelector(".grid"); 
const panoramica = muuriSection.querySelectorAll(".panoramica");
const agradecimiento = muuriSection.querySelectorAll(".agradecimiento");
const diploma = muuriSection.querySelectorAll(".diploma");
const testimonial = muuriSection.querySelectorAll(".testimonial");
const individual = muuriSection.querySelectorAll(".individual");
// Asignamos a una contante la lista de tipos de cuadro a mostrar
const tipoCuadro = document.querySelectorAll(".tipo-cuadro");

//Creamos las funciones para cada elemento del filtro por cuadro
tipoCuadro.forEach((e) => {
    e.addEventListener("click",(filtro)=>{
        filtro.preventDefault();
        console.log(e)
        filtro.target.innerHTML === "todos" ? mostrarTodo() : mostrarSolo(eval(filtro.target.innerHTML));
    });
});

//Funciones que ocultan/muestran los elementos por clases
function ocultar(e) {
    e.forEach(element => {
        element.classList.add("no-mostrar");;
    });
}
function ocultarTodo(){
    ocultar(panoramica);
    ocultar(agradecimiento);
    ocultar(diploma);
    ocultar(testimonial);
    ocultar(individual);
}
function mostrarTodo(){
    mostrar(panoramica);
    mostrar(agradecimiento);
    mostrar(diploma);
    mostrar(testimonial);
    mostrar(individual);
    agradecimiento.forEach(e => e.style.width = "50%");
    diploma.forEach(e => e.style.width = "50%");
    testimonial.forEach(e => e.style.width = "50%");
    individual.forEach(e => e.style.width = "50%");
    recargarGrid();
}
function mostrar(e) {
    e.forEach(element => {
        element.classList.remove("no-mostrar");
    });
}
function mostrarSolo(e) {
    ocultarTodo();
    mostrar(e);
    e.forEach(e => e.style.width = "100%");
    recargarGrid();
}

function recargarGrid() {
    grid.filter("[data-cargando]")
    grid.filter(`[data-linea${nombreLinea}]`)
}

//Codigo referente a mostrar y ocultar el overlay
const items = document.querySelectorAll(".item-content");
const overlay = document.querySelector('.overlay');
const card = document.querySelector('.card')
items.forEach((item)=>{
    item.addEventListener('click', (evento)=>{
        card.innerHTML = item.innerHTML;
        card.innerHTML.includes("paquete") ? paquete = `Paquete%20${card.querySelector(".paquete").innerText.split(" ").join("%20")}` : "";
        card.innerHTML.includes("Ingredientes a escoger") ? paquete += `%20_Ingredientes:_` : "";
        card.innerHTML.includes("ocultar") ? paquete = card.querySelector(".ocultar").innerText.split(" ").join("%20") : "";
        document.querySelector('.overlay').classList.remove('ocultar');
        document.querySelector('#pedir').href = `https://wa.me/529993639814`
    });
});

overlay.addEventListener('click', (e)=>{
    e.target.id === 'overlay' || e.target.id === 'cerrar' ? overlay.classList.add('ocultar') : '';
});

//Codigo referente al filtro por linea
const lineas = document.querySelectorAll(".linea a");
var nombreLinea = "";
lineas.forEach((linea) => {
    linea.addEventListener('click', (opcion) => {
        opcion.preventDefault();
        lineas.forEach((linea) => linea.classList.remove("activo"));
        opcion.target.classList.add("activo");

        const linea = opcion.target.innerHTML.toLowerCase();
        console.log(linea);
        linea === "todos" ? grid.filter(`[data-linea]`) : grid.filter(`[data-linea="${linea}"]`);
        linea === "todos" ? nombrelinea = "" : nombreLinea = `="${linea}"`;
    });
});