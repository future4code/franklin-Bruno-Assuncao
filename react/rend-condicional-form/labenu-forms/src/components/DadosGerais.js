import React from "react"

const DadosGerais = () => {
    return (
        <div>
            <h1>Dados Gerais</h1>
            <ul>
                <p>1. Qual o seu nome ?</p>
                <input></input>
                <p>2. Qual sua idade ?</p>
                <input></input>
                <p>3. Qual seu email ?</p>
                <input></input>
                <p>4. Qual sua escolaridade ?</p>
                <select type="text" placeholder="Escolaridade">
                    <option value="">Ensino Médio Incompleto</option>
                    <option value="">Ensino Médio Completo</option>
                    <option value="">Ensino Superior Incompleto</option>
                    <option value="">Ensino Superior Completo</option>
                </select>
            </ul>
        </div>
    )
}

export default DadosGerais