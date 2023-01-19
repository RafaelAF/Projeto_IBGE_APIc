
import './App.css';

import Macrorregiao from './ComponentsIBGE/Macrorregioes';

function App() {

  return (
    <ul className="App">
      <h1>Consumo API IBGE</h1>
      <div className='container-fluid aplicacao'>
        <Macrorregiao />
        <div>
          teste
        </div>
      </div>
    </ul>
    
  );
}

export default App;
