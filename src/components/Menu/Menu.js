import '../Navbar/Navbar.css'
import CartWichest from '../CartWichest/CartWichest'

const Menu = (props) => {
    return(
         <nav className="navbar"> 
            <ul>
                <CartWichest style={{ height: 60, width: 60, borderRadius: 50, marginRight: 20}}/>
                {/*<img src={Digital} alt="logo"/>*/}
                <li><a>{props.inicio}</a></li>
                <li><a>{props.computadores}</a></li>
                <li><a>{props.celulares}</a></li>
                <li><a>{props.accesorios}</a></li>
                <li><a>{props.nosotros}</a></li>
                <li><a>{props.contacto}</a></li>
            </ul>
         </nav>
    )
}

export default Menu