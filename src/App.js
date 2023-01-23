
import { useState } from 'react';
import './App.css';
import Card from './ComponentsIBGE/Card';

import Macrorregiao from './ComponentsIBGE/Macrorregioes';

function App() {

  const [muni, setMuni] = useState({})

  const dataCall = (data) => {
    setMuni(data)
    console.log(data)
  }

  return (
    <ul className="App">
      <h1>Consumo API IBGE</h1>
      <div className='container-fluid aplicacao'>
        <Macrorregiao functionFn={dataCall} />
        {
          muni ? <div>fhdfg </div> : <div>Não tem</div>
        }
        <Card 
          /*
              idMuni={muni.id} 
              nomeMuni={muni.nome} 
              microId={muni.microrregiao.id}
              microName={muni.microrregiao.nome}
              mesoId={muni.microrregiao.mesorregiao.id}
              mesoName={muni.microrregiao.mesorregiao.nome}
              regImediaId={muni["regiao-imediata"].id}
              regImediaNome={muni["regiao-imediata"].nome}
              regInterId={muni["regiao-imediata"]["regiao-intermediariWa"].id}
              regInterNome={muni["regiao-imediata"]["regiao-intermediaria"].nome}
              ufMuni={muni.microrregiao.mesorregiao.UF.sigla}
              regiaoMuni={muni.microrregiao.mesorregiao.UF.regiao.nome}
          */ 
         
           />
        
      </div>
    </ul>
    
  );
}

export default App;
