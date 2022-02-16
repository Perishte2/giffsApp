import React from "react";

const Gifs = ({ giff }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__front">
          <img src={giff.images.downsized_medium.url} alt="" />
        </div>
        <div className="card__back">
          <h1>{giff.title}</h1>
          <ul>
            <li>
              <strong>Import datetime:</strong> {giff.import_datetime}
            </li>
            <li>
              <strong>Trending datetime:</strong> {giff.trending_datetime}
            </li>
            <li>
              <strong>Username:</strong> {giff.username}
            </li>
            <li>
              <a style={{ color: "yellow" }} href={giff.url} alt="">
                Link to the Original GIF
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gifs;
