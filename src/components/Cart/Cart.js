import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalCantidad, getTotal, clearCart } = useContext(CartContext)
    
    const total = getTotal()

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(totalCantidad === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <>
            <h1>Cart</h1>
            <CartItemList cantidadAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
        </>
    )
}

export default Cart