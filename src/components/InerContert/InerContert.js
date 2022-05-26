import Iner from '../img/Iner.png'
const InerContert = ({title, parrafo}) => {
    return (
        <div>
            <img src={Iner}/>
            <h2>{title}</h2>
            <p>{parrafo}</p>
        </div>
    )
}

export default InerContert