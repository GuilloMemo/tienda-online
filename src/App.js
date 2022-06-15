import logo from './logo.svg';
import './App.css';
import { useState, createContext } from 'react';
import Menu from './components/Menu/Menu';
import InerContert from './components/InerContert/InerContert';
import Clasificados from './components/Clasificados/Clasificados';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

 export const Context = createContext()

function App() {

const [cart, setCart] = useState([])

  return (
    <div className="App">
      <Context.Provider  value={{ cart, setCart }}>
        <header>
          <BrowserRouter>
          <Menu inicio='INICIO' computadores='COMPUTADORES' celulares='CELULARES'accesorios='ACCESORIOS' nosotros='NOSOTROS' contacto='CONTACTO'/>
          <InerContert title='Bienvenidos' parrafo='Este es un espacio para comprar productos de alta tecnologia y abarcar todos los rincones del planeta'/>
            <Routes>
              <Route path='/' element={<ItemListContainer promision='Promociones'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer promision='Promociones'/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            </Routes>
          </BrowserRouter>
          
          
          <Clasificados contentUno = 'Celulares de baja y Alta Gama' contentDos = 'Computadores Personales y de Escritorio' contentTres = 'Toda Clase de Accesorios de Tecnologia'/>      
          {/*<ItemListContainer promision='Promociones'/>*/}
          {/*<ItemDetailContainer />*/}
        </header>
      </Context.Provider>
    </div>
  );
}

export default App;
