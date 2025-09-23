import axios from 'axios'
import { useState, useEffect } from 'react'

const AddMovie = () => {

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    image: null,
    abstract: ""
  })


  const setFildValue = (e) => {
    const { name, value } = e.target
    if (name === 'image') setFormData({ ...formData, image: e.target.files[0] })
    else setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/movies', formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })

  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h2>Aggiungi nuovo film</h2>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-4">
                <label htmlFor="">Titolo</label>
                <input type="text"
                  id='title'
                  name='title'
                  className='form-control'
                  onChange={setFildValue}
                  value={formData.title}
                  placeholder='Inserisci il titolo del film' />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="">Registra</label>
                <input type="text"
                  id='director'
                  name='director'
                  className='form-control'
                  onChange={setFildValue}
                  value={formData.director}
                  placeholder='Inserisci il regista del film' />
              </div>
              <div className="col-12 col-md-4">
                <label htmlFor="">Immagine</label>
                <input type="file"
                  id='image'
                  name='image'
                  className='form-control'
                  onChange={setFildValue}
                  placeholder='Inserisci immagine' />
              </div>
              <div className="col-12">
                <label htmlFor="">Plot</label>
                <input type="text"
                  id='abstract'
                  className='form-control'
                  onChange={setFildValue}
                  value={formData.abstract}
                  name='abstract'
                  placeholder='Inserisci il plot del film' />
              </div>
            </div>
            <button type='submit' className='btn text-white mt-3' style={{ backgroundColor: "#181818" }} >Aggiungi film</button>
          </form>
        </div>
      </div>


    </div>
  )
}

export default AddMovie
