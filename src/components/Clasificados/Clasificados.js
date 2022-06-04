import Celular from '../img/Celular.png'
import Computador from '../img/Computador.png'
import Audifonos from '../img/Audifonos.png'

const Clasificados = ({contentUno, contentDos, contentTres}) => {
    return (
        
        <div style={{border: "solid" }}>
            <img style={{height: 100, width: 100, display: "inline-flex"}} src={Celular}/>
            <p style={{display: "inline-flex"}}>{contentUno}</p>
            <img style={{height: 100, width: 100}} src={Computador}/>
            <p style={{display: "inline-flex"}}>{contentDos}</p>
            <img style={{height: 100, width: 100}} src={Audifonos}/>
            <p style={{display: "inline-flex"}}>{contentTres}</p>
        </div>

    )
}
export default Clasificados