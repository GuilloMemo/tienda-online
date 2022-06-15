import '../Itemc/Item.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../App'


const Item = ({ id, nombre, categoria, precio, imagen }) => {

    {/*const handleClick = (e) => {
        e.stopPropagation()
        console.log('Hice Click')
    }*/}
    
    return (
        <li style={{flexDirection: "column", textAling: "center", border: "solid" }}>
            <img style={{height: 200, width: 200, margin: 20}} src={imagen}/>
            {categoria}
            <br/>
            {nombre}
            <br/>
            {precio}
            <br/>
            <Link to={`/detail/${id}`}><button //onclick={handleClick} 
            style={{height: 30, width: 100, color: 'blueviolet', marginLeft: 0}}>Ver/Comprar</button></Link>
            <br/> 
        </li>      
    )
}
export default Item