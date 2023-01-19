export const List = ()=>{
    const myArray = ['apple', 'banana', 'orange', 'carro', 'teste', 'sdglsjdf']
    const secondArray = ['Carros', 'motos', 'ford', 'mustang', 'red']
    const arrayFinal = [...myArray, ...secondArray]
    return (
    <div>
        {arrayFinal.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}
    </div>)
}