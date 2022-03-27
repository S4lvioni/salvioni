import React from "react";
import "../css/index.css";
import perfil from "../img/foto_perfil.jpeg";

export const Header = () => {
  return (
    <div className="wrapper">
      <div className="semiwrap">
        <div className="centered-content">
          <div className="text-grid">
            <h1 className="openingText">Olá! </h1>
            <br />
            <h3 className="mainText">
              Eu sou Alexandre Salvioni, desenvolvedor web, graduado em
              Engenharia de Software.
            </h3>
          </div>
          <div className="image-grid-right">
            <img className="foto_perfil" src={perfil} />
          </div>
        </div>
      </div>
    </div>
  );
};
