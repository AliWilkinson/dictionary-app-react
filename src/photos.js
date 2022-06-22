import React from "react";
import "./photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a
                  href={props.photos[0].src.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={props.photos[0].alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
