import { useEffect } from "react"
import { useState } from "react"

const Macrorregiao = () => {

    const [regioes, setRegioes] = useState([])
    const [estados, setEstados] = useState([])
    const [mesoReg, setMesoReg] = useState([])
    const [micro, setMicro] = useState([])
    const [rGInter, setRGInter] = useState([])
    const [imadiata, setImediata] = useState([])
    const [municipio, setMunicipio] = useState([])
    

    const Regiao = async () =>{
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/`)
        const json = await res.json()
        setRegioes(json)
    }

    const selectReg = async (e) =>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`)
            const json = await res.json()
            let data = (json.filter((element)=>(element.regiao.nome == e.target.value)))
            setEstados(data.map(element => [element.nome, element.id]))
        }
        
    }
    const selectMeso = async (e) =>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/`)
            const json = await res.json()
            
            let data = (json.filter((element)=>(element.UF.id == e.target.value)))
            setMesoReg(data.map(element => [element.UF.id, element.UF.nome, element.nome, element.id]))
            
        }
        
    }
    const selectMicro = async (e) =>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/`)
            const json = await res.json()
            
            let data = (json.filter((element)=>(element.mesorregiao.id == e.target.value)))
            setMicro(data.map(element => [element.id, element.nome, element.mesorregiao.nome]))
            console.log()
        }
    }

    const selectGeoInt = async (e)=>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/${e.target.value}`)
            const json = await res.json()
            
            /*
            let data = (json.filter((element)=>(element.mesorregiao.id == e.target.value)))
            setMicro(data.map(element => [element.id, element.nome, element.mesorregiao.nome]))*/
            console.log(json)

        }
    }

    useEffect(() => {
        Regiao()
    },[]);
    
   

    return (
        <div>
            <select onChange={selectReg} name="" id="" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="null">Selecionar Região</option>
                {regioes.map((element, index)=>(
                    <option key={index}>{element.nome}</option>
                ))}
            </select>
            <select onChange={selectMeso} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="null">UF</option>
                {estados.map((element, index)=>(
                    <option value={element[1]} key={index}>{element[0]}</option>
                ))}
            </select>
            <select onChange={selectMicro}  name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="null">Mesorregião</option>
                {mesoReg.map((element, index)=>(
                    <option value={element[3]} key={index}>{element[2]}</option>
                ))}
            </select>
            <select onChange={selectGeoInt} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Microrregião</option>
                {micro.map((element, index)=>(
                    <option value={element[0]} key={index}>{element[1]}</option>
                ))}
            </select>
            <select name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Região geográfica intermediária</option>
            </select>
            <select name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Região geográfica imediata</option>
            </select>
            <select name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Município</option>
            </select>
        </div>
    );
}

export default Macrorregiao