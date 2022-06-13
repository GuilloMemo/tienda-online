import { useState, useEffect } from 'react';


const Counter = ({onAdd, initial, stock}) => {

    const [count, setCount] = useState(initial)

    useEffect(() => {
        console.log("El componente fue montado")

        return () => {
            console.log("El componente se va a desmontar")
        }

    }, [])

    useEffect(() => {
        console.log("se ejecuta despues del montaje y cuanto actuliza Count")
    }, [count])

    const decrement = () => {
        //*for(let i = 0; i < 2; i++){
        //setCount(count-1)
        setCount(prev => prev -1)
       
        //}
        
    }
    const increment = () => {
        if (count < stock){
        setCount(count+1)
        
        }
    }
    const reset = () => {
        setCount(initial)
       
    }
    console.log("antes del montaje y cada rerender (actualizacion)")

    return(
        <div style={{display: 'flex', marginLeft: '40%', paddingBottom: 30}}>
            {/*<button>-</button>*/}
            <button style={{height: 20, width: 20, marginTop: 28}} onClick = {decrement}>-</button>
            {/*<Button handleClick = {() => console.log('restar')} label='-'/>*/}
            {/*<h2>{props.initial}</h2>*/}
            <button onClick={() => onAdd(count)} style={{height: 20, width: 30, marginTop: 28}}>{count}</button>
            {/*<button onClick ={props.sumarIncrement}>+</button>*/}
            <button style={{height: 20, width: 20, marginTop: 28}}  onClick={increment}>+</button>
            {/*<Button handleClick = {() => console.log('sumar')} label='+'/>*/}
            <button style={{height: 20, marginTop: 28}} onClick={reset}>reset</button>
        </div>
    )
}

export default Counter