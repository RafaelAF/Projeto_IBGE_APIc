import { useState } from "react"

const Card = (props) => {





    return (
        <div className="container bg-secondary">
            <h1>Dados do municipio</h1>
            <div>
                <p><b>ID:</b>{props.idMuni}</p>
                <p><b>Nome:</b>{props.nomeMuni}</p>
            </div>
            <span className="line"></span>
            <div>
                <div>
                    <h2>Microrregiao:</h2>
                    <p><b>ID:</b>{props.microId}</p>
                    <p><b>Nome:</b>{props.microName}</p>
                </div>
                <span className="lineHorizontal"></span>
                <div>
                    <h2>Mesorregiao:</h2>
                    <p><b>ID:</b>{props.mesoId}</p>
                    <p><b>Nome:</b>{props.mesoName}</p>
                </div>
            </div>
            <span className="line"></span>
            <div>
                
                <div>
                    <h2>Região Imediata:</h2>
                    <p><b>ID:</b>{props.regImediaId}</p>
                    <p><b>Nome:</b>{props.regImediaNome}</p>
                </div>
                <span className="lineHorizontal"></span>
                <div>
                    <h2>Região Intermediaria:</h2>
                    <p><b>ID:</b>{props.regInterId}</p>
                    <p><b>Nome:</b>{props.regInterNome}</p>
                </div>
            </div>
            <span className="line"></span>
            <div>
                <p><b>UF:</b>{props.ufMuni}</p>
                <p><b>Região:</b>{props.regiaoMuni}</p>
            </div>
            
        </div>
    )
}

export default Card