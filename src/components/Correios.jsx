import { useState } from "react"

const Correios = () => {
    const [cep, setCep] = useState('')
    const [dados, setDados] = useState({})


    const handleSearch = async () =>{
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await res.json()
        setDados(json)
        
    }

    const handleChange = (event) =>{
        setCep(event.target.value)
    }

    return (
        <>
            <input 
                type="number" 
                name="" 
                id=""
                onChange={handleChange}
         />
            <button onClick={handleSearch}>Procurar</button>
            <div>
                <h1>Informações do CEP</h1>
                <p><b>Endereço: </b>{dados.logradouro}</p>
                <p><b>Complemento: </b>{dados.complemento}</p>
                <p><b>Bairro: </b>{dados.bairro}</p>
                <p><b>Municipio: </b>{dados.localidade}</p>
                <p><b>UF: </b>{dados.uf}</p>
                <p><b>Código IBGE: </b>{dados.ibge}</p>
                <p><b>GIA: </b>{dados.gia}</p>
                <p><b>CEP: </b>{dados.cep}</p>
                <p><b>DDD: </b>{dados.ddd}</p>
                <p><b>SIAFI: </b>{dados.siafi}</p>
                
            </div>
        </>
    );
}

export default Correios