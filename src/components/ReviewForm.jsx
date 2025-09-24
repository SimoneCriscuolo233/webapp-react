import { useState } from 'react';
import StarRating from './StarRating';
import axios from 'axios';

const API_URL = "http://localhost:3000";

const ReviewForm = ({ movieId, onReviewAdded }) => {
  const [formData, setFormData] = useState({ name: '', vote: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.text) {
      alert("Compila tutti i campi!");
      return;
    }
    if (formData.vote > 5 || formData.vote < 1 || isNaN(formData.vote)) {
      alert("Inserisci un numero da 1 a 5");
      return;
    }

    const newReview = {
      name: formData.name,
      vote: parseInt(formData.vote),
      text: formData.text
    };

    axios.post(`${API_URL}/movies/${movieId}/reviews`, newReview)
      .then(resp => {
        onReviewAdded(resp.data);  // avvisa il genitore che c’è una nuova review
        setFormData({ name: '', vote: '', text: '' }); // reset form
      })
      .catch(err => {
        console.error(err);
        alert("Errore nell'invio della recensione!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Inserisci il tuo nome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Voto</label>
          <input
            type="number"
            name="vote"
            className="form-control"
            placeholder="Inserisci il tuo voto da 1 a 5"
            value={formData.vote}
            onChange={handleChange}
            min={1}
            max={5}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label">Testo recensione</label>
          <textarea
            name="text"
            className="form-control"
            placeholder="Inserisci la recensione"
            value={formData.text}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Invia recensione</button>
    </form>
  );
};

export default ReviewForm;
