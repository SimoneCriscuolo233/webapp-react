import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/DefaultLayot';
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from './pages/NotFound.jsx';
import AddMovie from './pages/AddMovie.jsx';
function App() {

  return (
    <BrowserRouter>


      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
          <Route path='movies/add-movie' element={<AddMovie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>




  )
}

export default App
