import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
        <div className="Results p-4">
          <h2 className="name-word mb-4">{props.results.word}</h2>
            {props.results.meanings.map(function (meanings, index) {
            return (
              <div key={index}>
                <Meanings meanings={meanings} />
              </div>
            );
          })}
        </div>
      );
    } else {
        return null;
    }
      
}
