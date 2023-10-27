import { useNavigate } from "react-router-dom";
import map from "../images/marta-map.jpeg";
import "./AboutPage.css"

export default function About() {
    const navigate = useNavigate();

    return (
        <div className="about">
            <div className="header">
                <p onClick={() => {
                    navigate('/')
                    }}>Home</p>
                <h1 className="title">ABOUT</h1>
            </div>
            <div className="content">
                    <img src={map} alt="marta map" className="left" width = {600}></img>
                    <div className="right">
                        <h1>Our Mission</h1>
                        <p>The Metropolitan Atlanta Rapid Transit Authority is the principal public transport operator in the Atlanta metropolitan area. Formed in 1971 as strictly a bus system, MARTA operates a network of bus routes linked to a rapid transit system consisting of 48 miles (77 km) of rail track with 38 Subway stations. MARTA's rapid transit system is the eighth-largest rapid transit system in the United States by ridership.</p>
                    </div>
                </div>
            </div>
    )
}