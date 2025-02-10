
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form className="inquiry-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <h3>Business Address:</h3>
        <p>123 React Street, Suite 101, Webville, USA</p>
        
        <h3>Email & Phone Number:</h3>
        <p>Email: EasyWeb@gmail.com</p>
        <p>Phone:123456789</p>
      </div>
    </div>
  )
}

export default Contact