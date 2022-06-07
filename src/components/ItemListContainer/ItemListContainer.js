import { useState, useEffect } from 'react'
import { llamarProductos, llamarProductosByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContent/ItemListContent.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const { categoryId } = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        if(!categoryId){
            llamarProductos()
            .then(prod => {
                setProductos(prod)
            }).catch(error => {console.log(error)})
        }else{
            llamarProductosByCategory(categoryId)
            .then(prod => {
                setProductos(prod)
            }).catch(error => {console.log(error)}) 
        }
    }, [categoryId])

    console.log(productos)

    return(
        <>
        <h1>{props.promision}</h1>
            <div className="contenedor">
                {productos.length > 0 ?<ItemList productos={productos}/>
                :<h1>No component</h1>}
            </div>
        </>
    )
}

export default ItemListContainer