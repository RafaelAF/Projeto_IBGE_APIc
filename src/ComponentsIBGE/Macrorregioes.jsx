import { useEffect } from "react"
import { useState } from "react"

const Macrorregiao = (props) => {



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
            setMesoReg(data.map(element => [element.UF.id, element.UF.nome, element.nome, element.id, element.UF.sigla]))
            
        }
        
    }
    const selectMicro = async (e) =>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/microrregioes/`)
            const json = await res.json()
            
            let data = (json.filter((element)=>(element.mesorregiao.id == e.target.value)))
            setMicro(data.map(element => [element.id, element.nome, element.mesorregiao.nome, element.mesorregiao.id , element.mesorregiao.UF.sigla]))
            
        }
    }

    const selectGeoInt = async (e)=>{
        if(e.target.value !== 'null'){
            const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes-intermediarias/`)
            const json = await res.json()

            let data = (json.filter((element)=>(element.UF.sigla == e.target.value)))
            setRGInter(data.map(element => [element.id, element.nome, element.UF.nome]))
            //console.log(json[0].id)

        }
    }

    const selectImed = async (e) => {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/`)
        const json = await res.json()

        
        //console.log(e.target.value)
        let data = (json.filter((element)=>(element["regiao-intermediaria"].id == e.target.value)))
        setImediata(data.map(element => [element.id, element.nome, element["regiao-intermediaria"].nome]))
    }


    const selectMuni = async (e) => {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/`)
        const json = await res.json()

        let data = (json.filter(element=>(element["regiao-imediata"].id == e.target.value)))
        setMunicipio(data.map(element => [element.id, element.nome , element.microrregiao.nome, element.microrregiao.mesorregiao.nome , element["regiao-imediata"].nome, element["regiao-imediata"]["regiao-intermediaria"].nome]))

    }
    const detalharMunicipio = async (e) => {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${e.target.value}`)
        const json = await res.json()
        props.functionFn(json)
    }
    

    useEffect(() => {
        Regiao()
    },[]);

    
    
   

    return (
        <div>
            <select onChange={selectReg} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
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
                    <option value={element[4]} key={index}>{element[1]}</option>
                ))}
            </select>
            <select onChange={selectImed}  name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Região geográfica intermediária</option>
                {rGInter.map((element, index)=>(
                    <option value={element[0]} key={index}>{element[1]}</option>
                ))}
            </select>
            <select onChange={selectMuni} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Região geográfica imediata</option>
                {imadiata.map((element, index)=>(
                    <option value={element[0]} key={index}>{element[1]}</option>
                ))}
            </select>
            <select onChange={detalharMunicipio} name="" id="" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected value="">Município</option>
                {municipio.map((element, index)=>(
                    <option value={element[0]} key={element[0]}>{element[1]}</option>
                ))}
            </select>
        </div>
    );
}

export default Macrorregiao