import axios from "axios";
import { useState, useEffect } from "react";
import lotofacil from "./lotofacil-1.png";
import "../Pages.css";

export const Lotofacil = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const nome = "lotofacil";
  const id = 2643;

  const lotofa = () => {
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

  useEffect(lotofa, []);

  return (
    <>
      <div className="FundoLotofacil">
        <div className="Mega">
          <img
            src={lotofacil}
            alt={"lotofacil"}
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
        <div className="NumerosLotofacil">
          {sorteio.map((n) => {
            return <p className="NumeroLoto">{n}</p>;
          })}
        </div>
      </div>
    </>
  );
};
