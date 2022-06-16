import { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import CardContext from '../context/CardContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({id, imagen, categoria, nombre, precio, cantidad, descripcion }) => {

    const {cantidadAdded, setcantidadAdded} = useState(0)

    const {addItem} = useContext(CardContext)


    const handleOnAdd = (quality) => {
        console.log(`Se Agrego ${quality} ${nombre}`)

        addItem({id, nombre, precio, cantidad})

        setcantidadAdded(cantidad)
    }

    return (
        <>
            <h2>Card de Detalle</h2>
            <img style={{height: 300, width: 300}} src={imagen}/>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{cantidad}</p>
            <p>{descripcion}</p>
            { cantidadAdded === 0
                ?<Counter onAdd={handleOnAdd} initial={0} stock={12} /> 
                :<Link to='/cart'>Terminar Compra</Link>
            }  
        </>
    )
} 

export default ItemDetail