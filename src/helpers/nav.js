export function mostrarNav(e) {
    e.preventDefault();
    // variables
    const nav = document.querySelector('.navegacion');
    const menu  = document.querySelector('#menu');
    const body = document.querySelector('body');

    const sidebar = document.querySelector('.sidebar');
    console.log(window.innerWidth)

    // condiciones
    if (nav.classList.contains('navegacion--activo') || sidebar.classList.contains('sidebar--activo')) {
        if (window.innerWidth > 992) {
          sidebar.classList.remove('sidebar--activo')
        } else {
          nav.classList.remove('navegacion--activo');
        }
        menu.classList.remove('is-active');
        body.style.overflowY = 'auto';
    } else{
        if (window.innerWidth > 992) {
          sidebar.classList.add('sidebar--activo')
        } else {
          nav.classList.add('navegacion--activo');
        }
        menu.classList.add('is-active');
        body.style.overflowY = 'hidden';
    }
}