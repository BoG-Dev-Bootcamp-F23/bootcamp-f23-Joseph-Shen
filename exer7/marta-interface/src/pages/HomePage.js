import pic from "../images/MARTA-train.jpeg";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"

export default function HomePage() {
    const navigation = useNavigate();

    return (
        <div className="home">
            <div className="header">
                <h1>MARTA</h1>
                <div>
                    <p onClick={() => {
                        navigation('/about')
                    }}>About MARTA</p>
                </div>
            </div>
            <div className="body">
                <div className="left">
                    <h1>VIEW ROUTES SCHEDULE</h1>
                    <ul>
                        <li onClick={() => {
                            navigation("/linespage/gold")
                        }}>
                            <span style={{color : "goldenrod"}}>Gold</span> Line
                        </li>

                        <li onClick={() => {
                            navigation("/linespage/red")
                        }}>
                        <span style={{color : "rgba(255, 0, 0, 0.712)"}}>Red</span> Line
                        </li>

                        <li onClick={() => {
                            navigation("/linespage/blue")
                        }}>
                        <span style={{color : "rgb(25, 0, 255)"}}>Blue</span> Line
                        </li>

                        <li onClick={() => {
                            navigation("/linespage/green")
                        }}>
                        <span style={{color : "rgba(0, 134, 0, 0.616)"}}>Green</span> Line
                        </li>
                    </ul>

                </div>
                <img src={pic} alt="marta train" className="pic" width={600}></img>
            </div>
        </div>
    )
}