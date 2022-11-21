import axios from "axios";
import { useState, useEffect } from "react";
import quina from "./quina-1.png";
import "../Pages.css";

export const Quina = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const nome = "quina";

  const id = 5979;

  const Quina = () => {
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

  useEffect(Quina, []);

  return (
    <>
      <div className="FundoQuina">
        <div className="Mega">
          <img
            src={quina}
            alt={"quina"}
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
