import React, { useState } from "react";
import ResistanceBand from "./ResistenciaBanda";
import "./ResistenciaCalculadora.css";

const colorCodes: { [key: string]: number } = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};

const ResistanceCalculator: React.FC = () => {
  const [bands, setBands] = useState<string[]>([
    "black",
    "black",
    "black",
    "brown",
  ]);

  const handleBandChange = (index: number, color: string) => {
    const newBands = [...bands];
    newBands[index] = color;
    setBands(newBands);
  };

  const calculateResistance = (): number => {    
    const [band1, band2,, multiplier] = bands.map(
      (color) => colorCodes[color]
    );
    const resistanceValue = (band1 * 10 + band2) * Math.pow(10, multiplier);
    return resistanceValue;
  };

  return (
    <div className="calculator">
      <div className="bands">
        {bands.map((color, index) => (
          <ResistanceBand
            key={index}
            color={color}
            onChange={(color: string) => handleBandChange(index, color)}
          />
        ))}
      </div>
      <div className="result">
        <h2>Valor de la Resistencia: {calculateResistance()} Ω</h2>
      </div>
    </div>
  );
};

export default ResistanceCalculator;
