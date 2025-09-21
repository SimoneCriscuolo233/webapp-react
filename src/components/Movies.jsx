import axios from 'axios'
import { useState, useEffect } from 'react'
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
        <div className="col-4" key={movie.id}>
          <div className="card g-5" style={{ width: "18rem" }}>
            <img src={`${API_URL}/movies/image/${movie.image}`} className="card-img-top" alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Genre: {movie.genre}</p>
              <p className="card-text">Director: {movie.director}</p>
            </div>
          </div>
        </div>
      )
    })


  )
}

export default Movies