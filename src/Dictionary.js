import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [insertWord, setInsertWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${insertWord}`);
    let apiKey = "ato2b04e4f46da013787d91355bf798f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${insertWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleInput(event) {
    setInsertWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleInput}></input>
      </form>
      <Results results={results} />
    </div>
  );
}
