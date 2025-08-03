
function Footer() {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <p>© {new Date().getFullYear()} Custospace. All rights reserved.</p>
        <br />
        <p>Custospace is a product of Custospark Company Ltd.</p>
      </div>
      <div className='flex items-center justify-center gap-4 mt-2'>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className='flex items-center justify-center mt-2'>
        <p>Follow us on:</p>
        <a href="https://twitter.com/custospace" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com/custospace" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com/custospace" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>

    </div>
  )
}

export default Footer