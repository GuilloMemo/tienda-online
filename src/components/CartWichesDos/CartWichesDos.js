import { useContext } from "react"
import CardContext from "../../context/CardContext"

const CartWichesDos = () => {

    const { getCartCantidad } = useContext(CardContext)

    const totalCantidad = getCartCantidad()

    return (
        <div>
            <button style={{width: 80, height: 100, paddingTop: 5, backgroundColor: 'aqua', marginLeft: 10}}><img  sytle={{ width: 20, height: 20 }} src="imagenes/carrito.jpg" alt="logo"/>{totalCantidad}</button>
        </div>
    )

}
export default CartWichesDos