import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
              <li className="movie__genre" key={index}>
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired, // props의 이름을 이해하기 쉽도록 poster로 지정
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;