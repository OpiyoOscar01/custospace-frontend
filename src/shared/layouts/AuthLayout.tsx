import AuthNavbar from '../../features/auth/components/AuthNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

function AuthLayout() {
  return (
    <>

      <Helmet>
        <title>Auth - Custospace</title>
        <meta name="description" content="Your account on Custospace" />
      </Helmet>     
   <AuthNavbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default AuthLayout