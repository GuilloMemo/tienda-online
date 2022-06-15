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
                <NavLink to='/' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.inicio}</a></li></NavLink>
                <NavLink to='/category/Computadores' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.computadores}</a></li></NavLink>
                <NavLink to='/category/Celulares' className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.celulares}</a></li></NavLink>
                <NavLink to='/category/Accesorios'className={({isActive}) => 'isActive' ? 'activar' : 'noActivar'}><li><a>{props.accesorios}</a></li></NavLink>
                <li style={{paddingTop: 20 }}><a>{props.nosotros}</a></li>
                <li style={{paddingTop: 20 }}><a>{props.contacto}</a></li>
                <button style={{width: 80, height: 100, paddingTop: 5, backgroundColor: 'aqua'}}><CartWichesDos />0</button>
            </ul>
         </nav>
    )
}

export default Menu