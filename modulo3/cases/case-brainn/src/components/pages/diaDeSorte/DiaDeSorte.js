import axios from "axios";
import { useState, useEffect } from "react";
import diadesorte from "./dia-de-sorte-1.png";

export const DiaDeSorte = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const nome = "dia-de-sorte";
  const id = 671;

  const DiaSorte = () => {
    axios
      .get(`https://loteriascaixa-api.herokuapp.com//api/${nome}/${id}`, {})
      .then((response) => {
        // console.log(response.data);
        setSorteio(response.data.dezenas);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(DiaSorte, []);

  return (
    <>
      <div className="FundoSorte">
        <div className="Mega">
          <img
            src={diadesorte}
            alt={"diadesorte"}
            width="200"
            height="80"
            className="Image"
          />
        </div>
        <div className="Concurso">
          <p>Concurso</p>
          <p>
            {id} - {data}
          </p>
        </div>
      </div>
      <div className="Fundo2">
        <div className="Numeros">
          {sorteio.map((n) => {
            return <p className="Numeros-p">{n}</p>;
          })}
        </div>
      </div>
    </>
  );
};
