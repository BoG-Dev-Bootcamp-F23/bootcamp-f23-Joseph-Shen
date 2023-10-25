
import "./NavBar.css"
import Station from "./Station.js"

export default function NavBar(props) {
    let color = props.color
    // if (color === "GOLD") color = "gold";
    // if (color === "RED") color = "red";
    // if (color === "GREEN") color = "green";
    // if (color === "BLUE") color = "blue";
    let stations = props.data
    let updateStation = props.updateStation
    let activate = props.activate
    return (
        <div className = "Navbar"> 
            <div className = "select"> Select your starting station</div>
            <Station station = "All Stations" updateStation = {updateStation} activate = {activate}/>
            {stations?.map( (station) => {
                return <Station station = {station}  updateStation = {updateStation} activate = {activate}/>;
            })}
        </div>
    );
}
