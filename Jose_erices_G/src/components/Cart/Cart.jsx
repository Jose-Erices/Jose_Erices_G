import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito,} = useContext(CartContext)

    return (
        <div >

            {cart.length == 0 
            ? 
            <>
            <h2 className='total'>No existe una lista de Productos </h2>
            <Link className='irCarritoInicioCart' to={"/"}>Ir al Inicio</Link>
            </>
                
                :

                <>

                <h2 className='tituloCarItem'>Lista de Agregados</h2>

                {cart.map((p)=>(
                    <CartItem key={p.id} producto={p} eliminarItem={eliminarItem}/>
                ))}
                
                <p className='total'>Total: ${totalCarrito()}</p>

                <button className='vaciar' onClick={vaciarCarrito}>Vaciar Carro</button>
                {/* <Link className='comprar' to={"/ComponenteFuncional"}>Comprar Productos </Link> */}


                    <Link to={"/Checkout"}>Comprar</Link>

                </>

                

            } 
        </div>
    );
};

export default Cart;