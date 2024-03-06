import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import './Cartwidget.css'

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)
    
    return (
        <div>
    <img className='carrito' to ="/Carrito"  src="./public/CartIcon.png" alt="" />
    

            <p id='pCarro'>{cantidadCarrito() == 0 ? null : cantidadCarrito()}</p>
        </div>
    );
};

export default CartWidget;