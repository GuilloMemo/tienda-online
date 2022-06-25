import CartItem from "../CartItem/CartItem"

const CartItemList = ({ cantidadAdded }) => {
    return (
        <div>
            { cantidadAdded.map(p => <CartItem key={p.id} {...p}/>) }
        </div>
    )
}

export default CartItemList