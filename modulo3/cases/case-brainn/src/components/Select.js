import React, { useState } from "react";
import { DiaDeSorte } from "./pages/diaDeSorte/DiaDeSorte";
import { Lotofacil } from "./pages/lotofacil/Lotofacil";
import { Lotomania } from "./pages/lotomania/Lotomania";
import { MegaSena } from "./pages/mega-sena/MegaSena";
import { Quina } from "./pages/quina/Quina";
import { Timemania } from "./pages/timemania/Timemania";
import "./Select.css";

export const Select = () => {
  const [concurso, setConcurso] = useState({ value: "1" });

  const handleChange = (event) => {
    setConcurso({ value: event.target.value });
  };

  const Renderizar = () => {
    switch (concurso.value) {
      case "1":
        return <MegaSena />;
      case "2":
        return <Quina />;
      case "3":
        return <Lotofacil />;
      case "4":
        return <Lotomania />;
      case "5":
        return <Timemania />;
      case "6":
        return <DiaDeSorte />;
      default:
        console.log();
    }
  };
  console.log(concurso.value);
  return (
    <>
      <div>
        <select
          value={concurso.value}
          onChange={handleChange}
          className="Select"
        >
          <option value="1">Mega-sena</option>
          <option value="2">Quina</option>
          <option value="3">Lotofácil</option>
          <option value="4">Lotomania</option>
          <option value="5">Timemania</option>
          <option value="6">Dia de sorte</option>
        </select>
      </div>
      <div>{Renderizar()}</div>
    </>
  );
};
