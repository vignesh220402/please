import Navbar from "../Components/Navbar"
import './User.css'
const User = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us-text">
          At Luumi Media, we bring expertise in SEO, digital marketing, branding, and lead
          generation. Our team of specialists helps businesses grow through innovative strategies
          and technology-driven solutions.
        </p>
        <h2 className="about-us-subheader">Why Choose Us?</h2>
        <ul className="about-us-list">
          <li>Data-Driven Strategies</li>
          <li>Customized Marketing Solutions</li>
          <li>Proven Track Record</li>
        </ul>
      </div>
    </div>
  )
}

export default User