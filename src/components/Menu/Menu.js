import '../Navbar/Navbar.css'
import CartWichest from '../CartWichest/CartWichest'
import { Link, NavLink } from 'react-router-dom'

const Menu = (props) => {
   
    return(
         <nav className="navbar"> 
            <ul>
                <CartWichest/>
                {/*<img src={Digital} alt="logo"/>*/}
                <NavLink to='/' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.inicio}</a></li></NavLink>
                <NavLink to='/category/computadores' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.computadores}</a></li></NavLink>
                <NavLink to='/category/celulares' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.celulares}</a></li></NavLink>
                <NavLink to='/category/accesorios'className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.accesorios}</a></li></NavLink>
                <li style={{paddingTop: 20 }}><a>{props.nosotros}</a></li>
                <li style={{paddingTop: 20 }}><a>{props.contacto}</a></li>
            </ul>
         </nav>
    )
}

export default Menu