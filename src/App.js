import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import InerContert from './components/InerContert/InerContert';
import Clasificados from './components/Clasificados/Clasificados';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <Menu inicio='INICIO' computadores='COMPUTADORES' celulares='CELULARES'accesorios='ACCESORIOS' nosotros='NOSOTROS' contacto='CONTACTO'/>
        <InerContert title='Bienvenidos' parrafo='Este es un espacio para comprar productos de alta tecnologia y abarcar todos los rincones del planeta'/>
        <Clasificados contentUno = 'Celulares de baja y Alta Gama' contentDos = 'Computadores Personales y de Escritorio' contentTres = 'Toda Clase de Accesorios de Tecnologia'/>      
        <ItemListContainer promision='Promosiones'/>
      </header>
    </div>
  );
}

export default App;
