import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <img src={photo.src.landscape} alt="photos-meanning" className="img-fluid mt-4"/>
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
