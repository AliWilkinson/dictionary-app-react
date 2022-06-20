import React, { useState } from "react";
import axios from "axios";
import Results from "./results";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <div className="search">
        <h5>Type a word you want to look up</h5>
        <form onSubmit={search}>
          <input
            className="search-bar"
            type="search"
            onChange={handleKeywordChange}
          />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
