import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"

import './Home.css'
import About from "./About"
import Contact from "./Contact"
const home = () => {
    return (

        <div>
            <Navbar />
            <div className="main-header">
                <div className="header">
                    <h1>Driving Growth with Data-Driven Marketing</h1>
                    <h3>Luumi Media is your partner in success, offering tailored digital
                        marketing solutions <br></br>that boost visibility, engagement, and conversions.</h3>
                    <p> Call to Action (CTA):</p>
                    <Link to='/contact' className="linkname">Get a Free Consultation</Link>
                </div>
            </div>
            <hr />
            <About />
            <hr />
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
            <hr />
            <Contact/>
            <div className="end">@Copyrights</div>
        </div>

    )
}

export default home