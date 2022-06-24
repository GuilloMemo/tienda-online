import Iner from '../img/Iner.png'
import '../InerContainer/InerContainer.css'

const InerContert = ({title, parrafo}) => {
    return (
        <div>
            <img className="uno" src={Iner}/>
            <h2>{title}</h2>
            <p>{parrafo}</p>
        </div>
    )
}

export default InerContert