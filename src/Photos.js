import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="p-2 col-4" key={index}>
                <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="photos-meanning"
                    className="img-fluid mt-4"
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
