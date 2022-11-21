import axios from "axios";
import { useState, useEffect } from "react";
import timemania from "./timemania-1.png";

export const Timemania = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const nome = "timemania";
  const id = 1850;

  const Time = () => {
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

  useEffect(Time, []);

  return (
    <>
      <div className="FundoTimemania">
        <div className="Mega">
          <img src={timemania} alt={"timemania"} width="200" height="80" />
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
