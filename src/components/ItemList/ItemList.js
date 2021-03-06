import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    return(
            <ul style={{display: "flex"}}>
                {/*{productos.map(prod => <li key={prod.id}>{prod.nombre}</li>)}*/}
                {productos.map(prod => <Item key={prod.id} {...prod}/>)}
            </ul>   
    )
}
export default ItemList