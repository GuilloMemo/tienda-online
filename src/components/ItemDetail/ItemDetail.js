import Counter from "../Counter/Counter"

const ItemDetail = ({id, imagen, categoria, nombre, precio, cantidad, descripcion}) => {

    const handleOnAdd = (quality) => {
        console.log(`Se Agrego ${quality} ${nombre}`)
    }

    return (
        <>
            <h2>Card de Detalle</h2>
            <img style={{height: 300, width: 300}} src={imagen}/>
            <p>{categoria}</p>
            <p>{nombre}</p>
            <p>{precio}</p>
            <p>{cantidad}</p>
            <p>{descripcion}</p>
            <Counter onAdd={handleOnAdd} initial={0} stock={12} />   
        </>
    )
} 

export default ItemDetail