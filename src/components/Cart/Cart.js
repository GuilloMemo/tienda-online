import { useState, useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItemList from "../CartItemList/CartItemList"

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalCantidad, getTotal, clearCart } = useContext(CartContext)
    
    const total = getTotal()

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(totalCantidad === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    return (
        <>
            <h1>Cart</h1>
            <CartItemList productsAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button onClick={handleCreateOrder} className="Button">Generar Orden</button>
            {/* <button onClick={handleUpdateStock} className="Button">Stock 1000</button> */}
        </>
    )
}

export default Cart