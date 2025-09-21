import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/DefaultLayot';
import MovieDetail from "./pages/MovieDetail.jsx";

function App() {

  return (
    <BrowserRouter>


      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>




  )
}

export default App
