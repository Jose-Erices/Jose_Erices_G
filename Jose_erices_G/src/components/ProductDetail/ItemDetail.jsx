import React, {useState,useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'

const ItemDetail = ({producto}) => {

    const [cart,setCart] = useState(false)

    const {agregarCarrito} = useContext(CartContext)

    const onAdd = (count) => {

        setCart(true)

        agregarCarrito(producto,count)

    }

    return (
        <div className='Card'>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.description}</p>

            {cart ? <Link className='irCarritoInicio' to={'/cart'}>Ir al Carrito</Link> : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>}

            
        </div>
    );
};

export default ItemDetail;