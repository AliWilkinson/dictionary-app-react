import React from "react";
import "./meanings.css";
import Synonyms from "./synonyms";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br /> <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
