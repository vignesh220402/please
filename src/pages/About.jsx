
import './About.css'
const About = () => {
  return (
    <div>
      <div className="services-container">
        <h1 className="services-header">Our Services</h1>
        <div className="services">
          <div className="service-category">
            <h2>SEO Services</h2>
            <ul>
              <li>On-Page SEO</li>
              <li>Off-Page SEO</li>
              <li>Technical SEO</li>
              <li>Local SEO Optimization</li>
            </ul>
          </div>
          <div className="service-category">
            <h2>Digital Marketing</h2>
            <ul>
              <li>Performance Marketing</li>
              <li>Social Media Marketing</li>
              <li>Content Creation</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div className="service-category">
            <h2>Branding & Web Development</h2>
            <ul>
              <li>Website Design & Development</li>
              <li>Sales Funnel Creation</li>
              <li>Logo & Brand Identity</li>
            </ul>
          </div>
          <div className="service-category">
            <h2>Paid Advertising</h2>
            <ul>
              <li>Google Ads</li>
              <li>Social Media Ads</li>
              <li>Retargeting Campaigns</li>
            </ul>
          </div>
        </div>
      </div></div>
  )
}

export default About