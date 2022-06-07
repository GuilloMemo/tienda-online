import '../Itemc/Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, categoria, precio, imagen }) => {
    return (
        <div>
            <li style={{flexDirection: "column", textAling: "center", border: "solid"}}>
                <img style={{height: 200, width: 200, margin: 20}} src={imagen}/>
                {categoria}
                <br/>
                {nombre}
                <br/>
                {precio}
                <br/>
                <Link to={`/detail/${id}`}><button  style={{height: 30, width: 100, color: 'blueviolet', marginLeft: 0}}>Ver/Comprar</button></Link>
                <br/> 
            </li> 
        </div>     
    )
}
export default Item