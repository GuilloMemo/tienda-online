import { useContext } from "react"
import CardContext from "../../context/CardContext"
import { Link, useNavigate } from 'react-router-dom'

const CartWichesDos = () => {

    const { getCartCantidad } = useContext(CardContext)

    const totalCantidad = getCartCantidad()
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/cart')}>
            <img  sytle={{ width: 20, height: 20 }} src="imagenes/carrito.jpg" alt="logo"/>
            {totalCantidad}
        </div>
    )

}
export default CartWichesDos