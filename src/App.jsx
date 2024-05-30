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
import { useState } from 'react';
import FilterAside from './components/FilterAside';

function App() {

  const [sidebar, setSidebar] = useState(false);
  const [animarSidebar, setAnimarSidebar] = useState(false);

  const educacionSeccion = [
    {date: '2022 - Act', title: 'Instituto Politécnico Nacional (ESIME Culhuacán)', text: 'Carrera en curso como Ingeniero en Computación. adquiriendo una sólida base en ciencias de la computación y tecnologías de la información.'},
    {date: '2022 - 2023', title: 'Oracle Next-Education', text: 'Programa de Especialización en Frontend de Oracle Next Education. Este curso proporcionó una comprensión profunda de las tecnologías y prácticas más actuales en el desarrollo front-end.'},
    {date: '2005 - 2009', title: 'JavaScript Completo', text: 'Guía completa de JavaScript. Exploración a todas las facetas de este lenguaje de programación fundamental para el desarrollo web, desde los conceptos básicos hasta las técnicas más avanzadas.'},
    {date: '2009 - 2012', title: 'React y TypeScript - Guía Completa', text: 'Curso especializado que abarcó React y TypeScript, dos tecnologías fundamentales en el desarrollo frontend moderno. Durante el curso, se exploraron conceptos clave y creacion de proyectos reales.'},
  ]
  const skills = [
    {nombre:'HTML', porcentaje: '95%'},
    {nombre: 'React', porcentaje: '70%'},
    {nombre: 'CSS', porcentaje: '90%'}, 
    {nombre: 'JavaScript', porcentaje: '70%'}, 
    {nombre: 'TypeScript', porcentaje: '60%'}, 
    {nombre:'WordPress', porcentaje: '40%'}, 
  ];

  const proyectos = [
    {img: 'cafeteria', linkGitHub: 'https://github.com/SebastianHdzMiranda/La-Cafeteria', linkDemo: 'https://sebastianhdzmiranda.github.io/La-Cafeteria/', titulo: 'La Cafetería', tags: ['Sass', 'HTML', 'Gulp', 'Css-Grid', 'JavaScript']},
    {img: 'cotizador-criptos', linkGitHub: 'https://github.com/SebastianHdzMiranda/cotizadorCriptos-react', linkDemo: 'https://cotizador-criptos-react-ebon.vercel.app/', titulo: 'Cotizador-Criptomonedas', tags: ['React', 'Styled-Components', 'APis', 'CRUD']},
    {img: 'real-state', linkGitHub: 'https://github.com/SebastianHdzMiranda/RealState', linkDemo: 'https://sebastianhdzmiranda.github.io/RealState/', titulo: 'Real State', tags: ['Sass', 'HTML', 'JavaScript', 'FlexBox']},
    {img: 'guitarLA', linkGitHub: 'https://github.com/SebastianHdzMiranda/guitarla-reactTS', linkDemo: 'https://guitarla-react-ts-three.vercel.app/', titulo: 'Guitar LA', tags: ['React', 'Vite', 'Bootstrap', 'TypeScript']},
    {img: 'crm', linkGitHub: 'https://github.com/SebastianHdzMiranda/CRMIndexDB', linkDemo: 'https://sebastianhdzmiranda.github.io/CRMIndexDB/nuevo-cliente.html', titulo: 'CRM - Clientes', tags: ['JavaScript', 'TailWindCSS', 'HTML', 'IndexDB']},
    {img: 'control-gastos', linkGitHub: 'https://github.com/SebastianHdzMiranda/Control-de-Gastos', linkDemo: 'https://control-de-gastos-lac.vercel.app/', titulo: 'Control De Gastos', tags: ['React', 'CSS', 'Swipeable-list']},
  ];

  function mostrarNav(e) {
    e.preventDefault();
    // variables
    const nav = document.querySelector('.navegacion');
    const menu  = document.querySelector('#menu');
    const body = document.querySelector('body');

    // condiciones
    if (nav.classList.contains('navegacion--activo') || sidebar) {
        if (window.innerWidth > 992) {
          setAnimarSidebar(false);
          
          setTimeout(() => {
            setSidebar(false);
          }, 400);
        } else {
          nav.classList.remove('navegacion--activo');
        }
        menu.classList.remove('is-active');
        body.style.overflowY = 'auto';
    } else{
        if (window.innerWidth > 992) {
          setSidebar(true);

          setTimeout(() => {
            setAnimarSidebar(true);
          }, 100);
        } else {
          nav.classList.add('navegacion--activo');
        }
        menu.classList.add('is-active');
        body.style.overflowY = 'hidden';
    }
  }

  
  function ocultarMenu(e) {
    const nav = document.querySelector('.navegacion');
    const menu  = document.querySelector('#menu');
    const body = document.querySelector('body');

    const enlace = e.target;
    if (enlace.classList.contains('navegacion__enlace')) {
        
        if (nav.classList.contains('navegacion--activo')) {
            nav.classList.remove('navegacion--activo');
            menu.classList.remove('is-active');
            body.style.overflowY = 'auto';
            
        } 
    }
  }


  return (

    <>
      <Header mostrarNav={mostrarNav} ocultarMenu={ocultarMenu}/>
      {sidebar && <FilterAside animarSidebar={animarSidebar} mostrarNav={mostrarNav}/>}
      {sidebar && <Sidebar mostrarNav={mostrarNav} animarSidebar={animarSidebar}/>}
      <Cursor />
      <Hero />
      <Servicios />
      <About />
      <Educacion educacionSeccion={educacionSeccion} skills={skills}/>
      <Proyectos proyectos={proyectos}/>
      <Testimoniales />
      <Innovacion />
      {/* <Newslatter /> */}
      <Footer />
    </>
  )
}

export default App;
