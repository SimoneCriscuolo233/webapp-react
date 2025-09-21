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

        <div className="card" style={{ width: "18rem" }} key={movie.id}>

          <img src={`${API_URL}/movies/image/${movie.image}`} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      )
    })


  )
}

export default Movies
