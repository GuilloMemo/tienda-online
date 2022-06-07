import '../Navbar/Navbar.css'
import CartWichest from '../CartWichest/CartWichest'
import { Link } from 'react-router-dom'

const Menu = (props) => {
   
    return(
         <nav className="navbar"> 
            <ul>
                <CartWichest/>
                {/*<img src={Digital} alt="logo"/>*/}
                <Link to='/'><li><a>{props.inicio}</a></li></Link>
                <Link to='/category/computadores'><li><a>{props.computadores}</a></li></Link>
                <Link to='/category/celulares'><li><a>{props.celulares}</a></li></Link>
                <Link to='/category/accesorios'><li><a>{props.accesorios}</a></li></Link>
                <li><a>{props.nosotros}</a></li>
                <li><a>{props.contacto}</a></li>
            </ul>
         </nav>
    )
}

export default Menu