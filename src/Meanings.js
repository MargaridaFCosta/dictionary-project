import React from "react";

export default function Meanings(props) {
console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <h2>
        <em>{props.meanings.definition}</em>
      </h2>

      <h2>{props.meanings.example}</h2>
      <br />
    </div>
  );
}
