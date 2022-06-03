import React, { useState } from "react";

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
    <div>
      <div>
        {listaDeMensagens}
      </div>
      <input
          value={inputPessoa}
          onChange={onChangeInputPessoa}
          placeholder={"Nome"}
        />
        <input
          value={inputMensagem}
          onChange={onChangeInputMensagem}
          placeholder={"Mensagem"}
        />
        <button onClick={adicionaMensagem}>Enviar</button>
    </div>
  );
}

export default App;
