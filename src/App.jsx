import About from './components/About';
import Educacion from './components/Educacion';
import Header from './components/Header';
import Hero from './components/Hero';
import Innovacion from './components/Innovacion';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios'
import Testimoniales from './components/Testimoniales';

import './scss/app.scss';

import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import FilterAside from './components/FilterAside';
import { useMenu } from './hooks/useMenu';

function App() {

  // const [sidebar, setSidebar] = useState(false);
  // const [animarSidebar, setAnimarSidebar] = useState(false);
  // const [menuActive, setMenuActive] = useState(false);


  // function mostrarNav(e) {
  //   e.preventDefault();
  //   // variables
  //   // const nav = document.querySelector('.navegacion');
  //   // const menu  = document.querySelector('#menu');
  //   // const body = document.querySelector('body');
    
  //   setMenuActive( prevMenuActive => {
  //     const newMenuActive = !prevMenuActive;
      
  //     if (newMenuActive) {

  //       if (window.innerWidth > 992) {
  //         setSidebar(true);

  //         setTimeout(() => {
  //           setAnimarSidebar(true);
  //         }, 100);
  //       }

  //       document.body.style.overflowY = 'hidden'


  //     } else {
  //       if (window.innerWidth > 992) {
  //         setAnimarSidebar(false);
          
  //         setTimeout(() => {
  //           setSidebar(false);
  //         }, 400);
  //       }

  //       document.body.style.overflowY = 'auto'
  //     }

  //     return newMenuActive;
      
  //   })

  //   //-----------------------------------

  //   // // condiciones
  //   // if (nav.classList.contains('navegacion--activo') || sidebar) {
  //   //     if (window.innerWidth > 992) {
  //   //       setAnimarSidebar(false);
          
  //   //       setTimeout(() => {
  //   //         setSidebar(false);
  //   //       }, 400);
  //   //     } else {
  //   //       nav.classList.remove('navegacion--activo');
  //   //     }
  //   //     menu.classList.remove('is-active');
  //   //     body.style.overflowY = 'auto';
  //   // } else{
  //   //     if (window.innerWidth > 992) {
  //   //       setSidebar(true);

  //   //       setTimeout(() => {
  //   //         setAnimarSidebar(true);
  //   //       }, 100);
  //   //     } else {
  //   //       nav.classList.add('navegacion--activo');
  //   //     }
  //   //     menu.classList.add('is-active');
  //   //     body.style.overflowY = 'hidden';
  //   // }
  // }

  
  // function ocultarMenu(e) { 
  //   // const menu  = document.querySelector('#menu');
  //   const enlace = e.target;

  //   if (enlace.classList.contains('navegacion__enlace')) {
        
  //       if (menuActive) {
  //         setMenuActive(!menuActive);
  //         // menu.classList.remove('is-active');
  //         document.body.style.overflowY = 'auto'
  //       } 
  //   }
  // }

  const  {
    mostrarNav,
    ocultarMenu,
    menuActive,
    sidebar,
    animarSidebar,
  } = useMenu();


  return (

    <>
      <Header mostrarNav={mostrarNav} ocultarMenu={ocultarMenu} menuActive={menuActive}/>
      {sidebar && <FilterAside animarSidebar={animarSidebar} mostrarNav={mostrarNav}/>}
      {sidebar && <Sidebar mostrarNav={mostrarNav} animarSidebar={animarSidebar}/>}
      <Cursor />
      <Hero />
      <Servicios />
      <About />
      <Educacion/>
      <Proyectos />
      <Testimoniales />
      <Innovacion />
      {/* <Newslatter /> */}
      <Footer />
    </>
  )
}

export default App;
