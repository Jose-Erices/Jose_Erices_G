import React,{useState, useEffect} from 'react';
import Navbar from './components/Nabvar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error/Error';
import ComponenteFuncional from './components/ComponenteFuncional/ComponenteFuncional';
import InputSinVocales from './components/InputSinVocales/InputSinVocales';
import Message from './components/Message/Message';
import Abstract from './components/Abstract/Abstract';
import Cart from './components/Cart/Cart';
import ThemeProvider from './context/ThemeContext';
import DarkComponent from './components/DarkComponent/DarkComponent';

import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';

// import {getFirestore, doc, getDoc } from 'firebase/firestore';
// import {getFirestore, collection, getDocs} from 'firebase/firestore';
// import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';



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

          <Route path='/checkout' element={<Checkout/>}/>
        
          
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




//documento especifico

//   const [product,setProduct] = useState(null)

//   useEffect(()=>{
//   const db = getFirestore()

//   const productRef = doc(db, "Item1", "Zfs14ldtGU0leQCRaYgh")

//   getDoc(productRef).then((snapshot) => {
//       if (snapshot.exists){
//         setProduct({id: snapshot.id,...snapshot.data()})
//       }
    
//   })
// },[])

// collection completa 

// const [products,setProducts] = useState([])

// useEffect(()=>{
//     const db = getFirestore()


//     const itemsCollection = collection(db, "Item1")

//     getDocs(itemsCollection).then((snapshot) =>{
//           setProducts(snapshot.docs.map((doc)=>(
//             {id:doc.id,...doc.data()}
//           ))) 
//     })

// },[])

// console.log(products)


// collection filtrada

// collection filtrada

// const [products,setProducts] = useState([])

// useEffect(()=>{
//    const db = getFirestore()
//    const q = query  (
//     collection(db, "Item1"),
//     where("precio", ">", 3000)
//    )

// getDocs(q).then((snapshot)=>{

//   if(snapshot.size === 0){
//     console.log("No hay Resultados")
//   }

//   setProducts(snapshot.docs.map((doc) => (
//     {id: doc.id,...doc.data()}

//   )))
// })
// },[] )

// console.log(products)


