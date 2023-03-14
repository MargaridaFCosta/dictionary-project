import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [insertWord, setInsertWord] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "ato2b04e4f46da013787d91355bf798f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${insertWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInput(event) {
    setInsertWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="text-center mt-5">
          <input
            type="search"
            onChange={handleInput}
            placeholder="Insert a word"
            defaultValue={props.defaultWord}
          ></input>
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
