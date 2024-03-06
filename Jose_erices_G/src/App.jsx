import React,{useState} from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error';
import ComponenteFuncional from './components/ComponenteFuncional';
import InputSinVocales from './components/InputSinVocales';
import Message from './components/Message';
import Abstract from './components/Abstract';
import Cart from './components/Cart';
import ThemeProvider from './context/ThemeContext';
import DarkComponent from './components/DarkComponent';
import CartProvider from './context/CartContext';

const App = () => {

  return (
    <>

    <BrowserRouter>

      <CartProvider>

        <Navbar/>
        

        <Routes>

          <Route path='/' element={<ItemListContainer/>}/>
          

          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

          <Route path='/cart' element={<Cart/>}/>
          
          <Route path='*' element={<Error/>}/>

          <Route path='/ComponenteFuncional' element={<ComponenteFuncional/>}/>
             
         
        </Routes>

        <Footer/>

      </CartProvider>
      
    </BrowserRouter>

    </>
  );
};

export default App;