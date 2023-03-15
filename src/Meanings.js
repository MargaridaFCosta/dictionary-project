import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meanings.partOfSpeech}</h2>
      <h3>Definition: {props.meanings.definition}</h3>
      <h4 className="mb-2">{props.meanings.example}</h4>
      <Synonyms synonyms={props.meanings.synonyms} />
      <br />
    </div>
  );
}
