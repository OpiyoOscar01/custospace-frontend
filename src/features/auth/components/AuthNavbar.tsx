
function AuthNavbar() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <img src="logo.png" alt="Logo" />
        <h2>Custospace</h2>
  
      </div>

      <div className='flex items-center gap-4'>
      <div>Home</div>
      <div>Login</div>
      <div>Register</div>
      </div>
    </div>
  )
}

export default AuthNavbar