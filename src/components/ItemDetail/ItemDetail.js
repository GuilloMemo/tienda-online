const ItemDetail = ({id, imagen, categoria, nombre, precio, cantidad, descripcion}) => {
    return (
        <>
            <h2>Card de Detalle</h2>
            <img style={{height: 300, width: 300}} src={imagen}/>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{cantidad}</p>
            <p>{descripcion}</p>
        </>
    )
} 

export default ItemDetail