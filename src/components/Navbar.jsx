
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="col-8">

          <img src="/imgs/logo.png" alt="Logo" className="d-inline-block align-text-top" />
          <a className="navbar-brand" href="/">
            The Bool Movies
          </a>
        </div>
        <div className="col-4">

          <ul className="navbar-nav d-flex justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/movies">Movies</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>


  )
}


export default Navbar
