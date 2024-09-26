import React from "react";
import "./ResistenciaBanda.css";

const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "gray",
  "white",
];

interface ResistanceBandProps {
  color: string;
  onChange: (color: string) => void;
}

const ResistanceBand: React.FC<ResistanceBandProps> = ({ color, onChange }) => {
  return (
    <div className="band" style={{ backgroundColor: color }}>
      <select
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="color-select"
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ResistanceBand;
