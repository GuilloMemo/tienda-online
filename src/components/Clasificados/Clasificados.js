import Celular from '../img/Celular.png'
import Computador from '../img/Computador.png'
import Audifonos from '../img/Audifonos.png'

const Clasificados = ({contentUno, contentDos, contentTres}) => {
    return (
        <div>
            <img classNme="dos" src={Celular}/>
            <p>{contentUno}</p>
            <img classNme="dos" src={Computador}/>
            <p>{contentDos}</p>
            <img classNme="dos" src={Audifonos}/>
            <p>{contentTres}</p>
        </div>
    )
}
export default Clasificados