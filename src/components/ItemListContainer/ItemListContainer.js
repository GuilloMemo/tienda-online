import { useState, useEffect } from 'react'
import { llamarProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContent/ItemListContent.css'

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        llamarProductos()
        .then(response => {
            setProductos(response)
        })
    }, [])

    console.log(productos)

    return(
        <>
        <h1>{props.promision}</h1>
            <div className="contenedor">
                <ItemList productos={productos}/>
            </div>
        </>
    )
}

export default ItemListContainer