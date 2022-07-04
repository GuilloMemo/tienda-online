import { useState, useEffect } from 'react'
import { llamarProductos, llamarProductosByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import '../ItemListContent/ItemListContent.css'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(false)

    const [title, setTitle] = useState('Bienvenidos')

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const colleccionRef = categoryId ? (
            query(collection(db, 'productos'), where('category', '==', categoryId))
        ) : (collection(db, 'productos'))

        getDocs(colleccionRef).then(response => {
            console.log(response)
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProductos(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
        //if(!categoryId){
            //llamarProductos()
            //.then(prods => {
              //  setProductos(prods)
            //}).catch(error => {console.log(error)})
            //.finally(() => {
              //  setLoading(false)
            //})
        //}else{
          //  llamarProductosByCategory(categoryId)
            //.then(prods => {
              //  setProductos(prods)
            //}).catch(error => {console.log(error)}) 
            //.finally(() => {
              //  setLoading(false)
            //})
        //}
    }, [categoryId])

    useEffect(() => {
        setTimeout(() => {
            setTitle('Estos son nuestros productos')
        },2000)
    },[])

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