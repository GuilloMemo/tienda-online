import '../Navbar/Navbar.css'
import CartWichest from '../CartWichest/CartWichest'
import CartWichesDos from '../CartWichesDos/CartWichesDos'
import { Link, NavLink } from 'react-router-dom'

const Menu = (props) => {
   
    return(
         <nav className="navbar"> 
            <ul>
                <CartWichest/>
                {/*<img src={Digital} alt="logo"/>*/}
                <NavLink to='/' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li>{props.inicio}</li></NavLink>
                <NavLink to='/category/Computadores' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li>{props.computadores}</li></NavLink>
                <NavLink to='/category/Celulares' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li>{props.celulares}</li></NavLink>
                <NavLink to='/category/Accesorios'className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li>{props.accesorios}</li></NavLink>
                <li style={{paddingTop: 20 }}>{props.nosotros}</li>
                <li style={{paddingTop: 20 }}>{props.contacto}</li>
                <CartWichesDos />
            </ul>
         </nav>
    )
}

export default Menu