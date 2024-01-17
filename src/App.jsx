import About from './components/About';
import Educacion from './components/Educacion';
import Header from './components/Header';
import Hero from './components/Hero';
import Innovacion from './components/Innovacion';
import Proyectos from './components/Proyectos';
import Servicios from './components/Servicios'
import Testimoniales from './components/Testimoniales';

import './scss/app.scss';

import cafeteria from './assets/portafolio/cafeteria.png';
import controlGastos from './assets/portafolio/control-gastos.png';
import guitarLA from './assets/portafolio/guitarLA.png';
import nailsSite from './assets/portafolio/nails-site.png';
import nucleus from './assets/portafolio/nucleus.png';
import realState from './assets/portafolio/real-state.png';
import Cursor from './components/Cursor';
import Newslatter from './components/Newslatter';
import Footer from './components/Footer';

function App() {
  
  const educacionSeccion = [
    {date: '2014- 2018', title: 'WordPress and End Developer'},
    {date: '2012 - 2014', title: 'Python Developer'},
    {date: '2005 - 2009', title: 'Kent State University'},
    {date: '2009 - 2012', title: 'User Experience Design'},
  ]
  const skills = [
    {nombre:'HTML', porcentaje: '80%'},
    {nombre: 'React', porcentaje: '30%'},
    {nombre: 'CSS', porcentaje: '90%'}, 
    {nombre:'PHP', porcentaje: '40%'}, 
    {nombre: 'JavaScript', porcentaje: '70%'}, 
    {nombre: 'WordPress', porcentaje: '60%'}, 
  ];

  const proyectos = [
    {img: cafeteria, linkGitHub: 'https://github.com/SebastianHdzMiranda/La-Cafeteria', linkDemo: 'https://sebastianhdzmiranda.github.io/La-Cafeteria/', titulo: 'La Cafeteria'},
    {img: nucleus, linkGitHub: 'https://github.com/SebastianHdzMiranda/nucleus-eWallet', linkDemo: 'https://sebastianhdzmiranda.github.io/nucleus-eWallet/', titulo: 'Nucleus'},
    {img: realState, linkGitHub: 'https://github.com/SebastianHdzMiranda/RealState', linkDemo: 'https://sebastianhdzmiranda.github.io/RealState/', titulo: 'Real State'},
    {img: guitarLA, linkGitHub: 'https://github.com/SebastianHdzMiranda/GuitarLA', linkDemo: 'https://sebastianhdzmiranda.github.io/GuitarLA/', titulo: 'Guitar LA'},
    {img: nailsSite, linkGitHub: 'https://github.com/SebastianHdzMiranda/CarolinaSpa', linkDemo: 'https://sebastianhdzmiranda.github.io/CarolinaSpa/', titulo: 'Nails Site'},
    {img: controlGastos, linkGitHub: 'https://github.com/SebastianHdzMiranda/Control-de-Gastos', linkDemo: 'https://control-de-gastos-lac.vercel.app/', titulo: 'Control De Gastos'},
  ];

  return (

    <>
      <Header />
      <Cursor />
      <Hero />
      <Servicios />
      <About />
      <Educacion educacionSeccion={educacionSeccion} skills={skills}/>
      <Proyectos proyectos={proyectos}/>
      <Testimoniales />
      <Innovacion />
      <Newslatter />
      <Footer />
    </>
  )
}

export default App;
