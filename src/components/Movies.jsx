import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([])
  const API_URL = "http://localhost:3000"
  useEffect(() => {
    axios.get(`${API_URL}/movies`).then((resp) => {
      setMovies(resp.data)
    }).catch((err) => console.log('Error', err.message))
  }), [];


  return (


    movies.map(movie => {
      return (
        <div className="col-12  col-md-6 col-lg-4" key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <div className="card" style={{ width: "18rem", maxHeight: "34rem", cursor: "pointer" }} >
              <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text pb-3">Director: {movie.director}</p>
              </div>
            </div>
          </Link>
        </div >
      )
    })


  )
}

export default Movies