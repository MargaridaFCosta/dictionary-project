import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [insertWord, setInsertWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "ato2b04e4f46da013787d91355bf798f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${insertWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setInsertWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="text-center mt-5">
        <input type="search" onChange={handleInput} placeholder="Insert a word"></input>
      </form>
      <Results results={results} />
    </div>
  );
}
