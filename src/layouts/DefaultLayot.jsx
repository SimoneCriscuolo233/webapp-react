import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Outlet />
      </div>
    </>

  )
}

export default Layout