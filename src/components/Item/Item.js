import '../Itemc/Item.css'

const Item = ({ nombre, categoria, precio, imagen }) => {
    return (
        <li>
            <img className="cinco" src={imagen}/>
            <br/>
            {categoria}
            <br/>
            {nombre}
            <br/>
            {precio}
            <button style={{height: 30, width: 100, color: 'blueviolet'}}>Ver/Comprar</button> 
        </li>      
    )
}
export default Item