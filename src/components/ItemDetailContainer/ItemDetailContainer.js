import { useState, useEffect } from "react"
import { llamarProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc ,doc } from "firebase/firestore"
import { db } from "../../services/firebase"


const ItemDetailContainer = () => {

    const [products, setProducts] = useState()

    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {

        const docRef = doc(db, 'productos', productId)
        getDoc(docRef).then(doc => {
            const productsFormatted = {id: doc.id, ...doc.data()}
            setProducts(productsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        //llamarProductosById(productId).then(response => {
          //  setProducts(response)
        //}).catch(error => {
          //  console.log(error)
        //}).finally(() => {
          //  setLoading(false)
        //})
    }, [productId])

    console.log(products)

    if(loading){
        return <h3>CARGANDO...</h3>
    }

    return (
        <div style={{border: "solid", backgroundColor: "darkgray"}}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer