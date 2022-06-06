import React, { useState } from "react";
import './App.css';

function App() {
  const [mensagem, setMensagem] = useState ([
  ]);

  const [inputPessoa, setInputPessoa] = useState("");
  const [inputMensagem, setInputMensagem] = useState("");

  const adicionaMensagem = () => {
    const novaMensagem = {
      nome: inputPessoa,
      mensagem: inputMensagem
    };

    const novasMensagens = [...mensagem, novaMensagem];

    setMensagem(novasMensagens);

    setInputPessoa ('')
    setInputMensagem ('')
  };

  const onChangeInputPessoa = (event) => {
    setInputPessoa(event.target.value);
  };

  const onChangeInputMensagem = (event) => {
    setInputMensagem(event.target.value);
  };

  const listaDeMensagens = mensagem.map((envio) => {
    return (
      <p>
        {envio.nome} : {envio.mensagem}
      </p>
    );
  });

  return (
    <div className="container">
      <div>
        {listaDeMensagens}
      </div>
      <div className='input'>
        <input className="inputPessoa"
            value={inputPessoa}
            onChange={onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input className="inputMensagem"
            value={inputMensagem}
            onChange={onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <button onClick={adicionaMensagem}>Enviar</button>
        </div>
    </div>
  );
}

export default App;
