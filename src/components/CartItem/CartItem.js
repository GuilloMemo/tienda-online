import { useContext } from 'react'
import CardContext from '../../context/CardContext'


const CartItem = ({ id, nombre, cantidad, precio }) => {
    const { remoeItem } = useContext(CardContext)

    const handleRemove = (id) => {
        remoeItem(id)
    }

    return (
        <article>
            <header>
                <h3>
                    {nombre}
                </h3>
            </header>
            <section>
                <h5>
                    Cantidad: {cantidad}
                </h5>
                <p>
                    Precio: ${precio}
                </p>
            </section>           
            <footer>
                 <p>
                     Subtotal: ${precio * cantidad}
                 </p>
                 <button onClick={() => handleRemove(id)}>X</button>
            </footer>
        </article>
    )
}

export default CartItem