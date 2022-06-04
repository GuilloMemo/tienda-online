import '../Itemc/Item.css'

const Item = ({ nombre, categoria, precio, imagen }) => {
    return (
        <li style={{flexDirection: "column", textAling: "center", border: "solid"}}>
            <img style={{height: 200, width: 200, margin: 20}} src={imagen}/>
            {categoria}
            <br/>
            {nombre}
            <br/>
            {precio}
            <br/>
            <button style={{height: 30, width: 100, color: 'blueviolet', marginLeft: 72}}>Ver/Comprar</button>
            <br/> 
        </li>      
    )
}
export default Item