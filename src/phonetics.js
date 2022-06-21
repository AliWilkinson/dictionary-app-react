import React from "react";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <br />
      {props.phonetic.text}
    </div>
  );
}
