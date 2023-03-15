import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
      return (
        <div className="Results p-4">
          <section>
            <h2 className="name-word mb-1">{props.results.word}</h2>
            <h3 className="phonetics">/{props.results.phonetic}/</h3>
          </section>
          <br />
          <section>
            {props.results.meanings.map(function (meanings, index) {
              return (
                <div key={index}>
                  <Meanings meanings={meanings} />
                </div>
              );
            })}
          </section>
        </div>
      );
    } else {
        return null;
    }
      
}
