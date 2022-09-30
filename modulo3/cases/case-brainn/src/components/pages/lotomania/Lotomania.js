import axios from "axios";
import { useState, useEffect } from "react";
import lotomania from "./lotomania-1.png";

export const Lotomania = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const id = "2380";
  const nome = "lotomania";

  const lotoma = () => {
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

  useEffect(lotoma, []);

  return (
    <>
      <div className="FundoLotomania">
        <div className="Mega">
          <img src={lotomania} alt={"lotomania"} width="200" height="100" />
        </div>
        <div className="Concurso">
          <p>Concurso</p>
          <p>
            {id} - {data}
          </p>
        </div>
      </div>
      <div className="Fundo2">
        <div className="NumerosLotomania">
          {sorteio.map((n) => {
            return <p className="NumeroLoto">{n}</p>;
          })}
        </div>
      </div>
    </>
  );
};
