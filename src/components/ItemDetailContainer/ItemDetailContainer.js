import { useState, useEffect } from "react"
import { llamarProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState()

    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        llamarProductosById(productId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

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