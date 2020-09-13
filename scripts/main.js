//Codigo referente a mostrar y ocultar el menu desplegable
const menuIcon = document.querySelector("#menu-icon");
const menuDesplegable = document.querySelector(".menu-desplegable");
menuDesplegable.addEventListener('click', (e) => {
    e.target.id === 'menu-desplegable' || e.target.id === 'cerrar' ? menuDesplegable.classList.add('ocultar') : '';
});
menuIcon.addEventListener('click',(e)=>{
    menuDesplegable.classList.remove('ocultar');
});
