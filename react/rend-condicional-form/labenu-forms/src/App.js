import React, { useState } from 'react';
import ComSuperior from './components/ComSuperior';
import DadosGerais from './components/DadosGerais';
import Final from './components/Final';
import SemSuperior from './components/SemSuperior';
import './App.css'

function App() {
  const [etapa, setEtapa] = useState (1)

  const proximaEtapa = () => {
    setEtapa (etapa + 1)
  }
  // const proximaSemSuperior = () => {
  //   setEtapa (3)
  // }
  // const proximaFinal = () => {
  //   setEtapa (4)
  // }

    const renderizaEtapa = () => {
      switch (etapa) {
        case 1:
          return (<DadosGerais/>)
        case 2:
          return(<ComSuperior/>)
        case 3:
          return (<SemSuperior/>)
        case 4:
          return (<Final/>)
        default:
          break;
      }
    }
  return (
    <div className='App'>
      {renderizaEtapa()}
      {etapa <4 ? 
      <button onClick={proximaEtapa}>Próximo</button>:
      ''
      }
      
    </div>
  );
}

export default App
