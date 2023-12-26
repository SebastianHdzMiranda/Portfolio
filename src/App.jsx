import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Innovacion from './components/Innovacion';
import Servicios from './components/Servicios'
import './scss/app.scss';
function App() {

  return (
    <>
      <Header />
      <Hero />
      <Servicios />
      <About />
      <Innovacion />
    </>
  )
}

export default App;
