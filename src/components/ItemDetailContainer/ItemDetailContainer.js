import { useState, useEffect } from "react"
import { llamarProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState()

    const {productId} = useParams()

    useEffect(() => {
        llamarProductosById(productId).then(response => {
            setProducts(response)
        })
    }, [])

    console.log(products)

    return (
        <div style={{border: "solid", backgroundColor: "darkgray"}}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...products} />
        </div>
    )
}

export default ItemDetailContainer