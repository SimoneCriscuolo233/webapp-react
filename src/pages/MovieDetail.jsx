import { useEffect, useState } from 'react';
import { useParams, useNavigate, replace } from 'react-router-dom';
import axios from 'axios';
import StarRating from '../components/StarRating';
import ReviewForm from '../components/ReviewForm';
const API_URL = "http://localhost:3000";

const MovieDetail = () => {
  const { id } = useParams(); // prende l'id dalla route
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`${API_URL}/movies/${id}`)
      .then(resp => setMovie(resp.data))
      .catch(() => navigate("/not-found", { replace: true }));
  }, [id]);

  const handleReviewAdded = (review) => {
    setMovie(prev => ({
      ...prev,
      reviews: [...prev.reviews, review]
    }));
  };
  if (!movie) return <p>Loading...</p>;
  const goNextPage = () => {
    const page = parseInt(id) + 1
    navigate("/movies/" + page)
  }
  const goPrevPage = () => {
    const page = parseInt(id) - 1
    navigate("/movies/" + page)
  }
  return (
    <div className="container mt-4">
      <h2 className="d-flex align-items-center">
        {movie.title}
        {movie.averageVote && (
          <span className="ms-2 d-flex align-items-center">
            <StarRating vote={Math.round(movie.averageVote)} />
            <span className="ms-1">({Number(movie.averageVote).toFixed(1)})</span>
          </span>
        )}
      </h2>
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
      {movie.reviews.map((review) => {
        return (
          <div key={review.id} className="mb-2">
            <StarRating vote={review.vote} /> {/* Passiamo il voto */}
            <p>{review.text} <br /> <em>- {review.name}</em></p>
          </div>
        )
      })}

      <ReviewForm movieId={id} onReviewAdded={handleReviewAdded} />


      <div className="container mt-4">
        <div className="d-flex justify-content-between mb-3">
          <button className="btn text-white" style={{ backgroundColor: "#181818" }} onClick={() => goPrevPage()} disabled={parseInt(id) === 1 ? true : false}>
            &laquo; Indietro
          </button>
          <button className="btn text-white" style={{ backgroundColor: "#181818" }} onClick={() => goNextPage()}>
            Avanti &raquo;
          </button>
        </div>


      </div>
    </div>
  );
};

export default MovieDetail;