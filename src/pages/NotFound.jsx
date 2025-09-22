import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className='row'>
          <div className="col-12">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Pagina non trovata</h2>
            <p className="text-muted">
              La pagina che stai cercando non esiste o è stata rimossa.
            </p>
            <Link to="/">
              <button className="btn btn-primary">Torna alla Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound