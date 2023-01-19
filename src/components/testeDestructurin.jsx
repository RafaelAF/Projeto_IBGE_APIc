import {useState} from 'react'

export const Dest = () =>{
    const [count, setCount] = useState(0)


    return (
        <div>
            <button onClick={()=>{setCount(count +1)}}>Adicionar</button>
            
            <p>{(count % 2 === 0) ? `par ${count}` : `impar ${count}`}</p>
        </div>
    )
}