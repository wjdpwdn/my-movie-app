import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "../components/Movie.css";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  grid-gap: 100px;
  padding: 50px;
  width: 80%;
  padding-top: 70px;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    setMovies(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loader>
          <span className="loader__text">Loading...</span>
        </Loader>
      ) : (
        <Movies>
          {movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </Movies>
      )}
    </Container>
  );
}

export default Home;
