import { useState, useEffect } from 'react'
import { llamarProductos, llamarProductosByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContent/ItemListContent.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        if(!categoryId){
            llamarProductos()
            .then(prods => {
                setProductos(prods)
            }).catch(error => {console.log(error)})
            .finally(() => {
                setLoading(false)
            })
        }else{
            llamarProductosByCategory(categoryId)
            .then(prods => {
                setProductos(prods)
            }).catch(error => {console.log(error)}) 
            .finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    console.log(productos)

    if(loading){
        return <h3>CARGANDO...</h3>
    }

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