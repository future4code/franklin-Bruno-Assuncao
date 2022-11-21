import axios from "axios";
import megaSena from "./mega-sena1.png";
import { useState, useEffect } from "react";
import "../Pages.css";

export const MegaSena = () => {
  const [sorteio, setSorteio] = useState([]);
  const [data, setData] = useState([]);
  const nome = "mega-sena";
  const id = 2531;

  const Mega = () => {
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

  useEffect(Mega, []);

  return (
    <div>
      <div className="FundoMega">
        <div className="Mega">
          <img
            src={megaSena}
            alt={"mega"}
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
    </div>
  );
};
