import AuthNavbar from '../../features/auth/components/AuthNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AuthLayout