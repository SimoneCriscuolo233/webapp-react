import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/DefaultLayot';
import Movies from "./pages/Movies.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";

function App() {

  return (
    <BrowserRouter>


      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" >
            <Route index element={<Movies />} />
            <Route path='/movies/:id' element={<MovieDetail />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
