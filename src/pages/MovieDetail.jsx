import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:3000";

const MovieDetail = () => {
  const { id } = useParams(); // prende l'id dalla route
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/movies/${id}`)
      .then(resp => setMovie(resp.data))
      .catch(err => console.log('Error:', err.message));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      <img
        src={movie.image}
        alt={movie.title}
        className="img-fluid mb-3"
        style={{ maxWidth: '400px' }}
      />
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.release_year}</p>
      <p><strong>Abstract:</strong> {movie.abstract}</p>
    </div>
  );
};

export default MovieDetail;