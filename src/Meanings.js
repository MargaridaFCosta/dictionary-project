import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meanings.partOfSpeech}</h2>
      <h3>Definition: {props.meanings.definition}</h3>
      <h3 className="text-muted mb-3">{props.meanings.example}</h3>
      <br />
    </div>
  );
}
