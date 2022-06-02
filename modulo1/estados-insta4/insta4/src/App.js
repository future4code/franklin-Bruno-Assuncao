import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const App = () => {
  const [arrayPost, setArrayPost] = useState ([
      {
        nomeUsuario:'paulinha',
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:'andré',
        fotoUsuario:'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
        fotoPost:'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
      },
      {
        nomeUsuario:'Jonas',
        fotoUsuario:'https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc',
        fotoPost:'data:image/jpeg;base64,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',
      }
    ]);

  const [inputUsuario, setInputUsuario] = useState('');
  const [inputFotoUsuario, setInputFotoUsuatrio] = useState('');
  const [inputFotoPost, setInputFotoPost] = useState('');

  const adicionaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: inputUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost,

    };

    const novasPostagens = [...arrayPost, novaPostagem];
    setArrayPost(novasPostagens);
  };

  const onChangeInputUsuario = (event) => {
    setInputUsuario(event.target.value);
  };
  const onChangeInputFotoUsuario = (event) => {
    setInputFotoUsuatrio(event.target.value);
  };
  const onChangeInputFotoPosto = (event) => {
    setInputFotoPost(event.target.value);
  };
  
  const listaPost = arrayPost.map((posted) =>{
    return (
      <Post 
      nomeUsuario = {posted.nomeUsuario}
      fotoUsuario = {posted.fotoUsuario}
      fotoPost = {posted.fotoPost}
      />
    )
  });
  return(
  <MainContainer>
    <div>
      <div>
      <input
          value={inputUsuario}
          onChange={onChangeInputUsuario}
          placeholder={"Nome Usuario"}
        />
        <input
          value={inputFotoUsuario}
          onChange={onChangeInputFotoUsuario}
          placeholder={"Foto Usuario"}
        />
        <input
          value={inputFotoPost}
          onChange={onChangeInputFotoPosto}
          placeholder={"Foto Postagem"}
        />
        <button onClick={adicionaPostagem}>Postar</button>
      </div>
      <div>{listaPost}</div>
    </div>
  </MainContainer>
);
};

export default App;