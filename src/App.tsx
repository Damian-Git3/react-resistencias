import React from "react";
import ResistanceCalculator from "./components/ResistenciaCalculadora";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora de Resistencias</h1>
      </header>
      <div className="resistance-table">
        <h2>Tabla de Valores de Resistencias</h2>
        <img
          src="https://www.inventable.eu/media/122_Resistencias_colores/resistor_color_5band.png"
          alt="Tabla de Valores de Resistencias"
        />
      </div>
      <ResistanceCalculator />
    </div>
  );
};

export default App;
    