import React from "react";

export default function Meanings(props) {
    return (
      <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
            {props.meanings.definition.map(function (definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            {definition.example}
                        </p>
                    </div>
                );
            })}
      </div>
    );
}