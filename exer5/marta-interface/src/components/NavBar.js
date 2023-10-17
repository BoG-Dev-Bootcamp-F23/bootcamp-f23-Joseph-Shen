
import Station from "./Station.js"

export default function NavBar(props) {
    let color = props.color
    if (color === "GOLD") color = "gold";
    if (color === "RED") color = "red";
    if (color === "GREEN") color = "green";
    if (color === "BLUE") color = "blue";
    let stations = props.data
    return (
        <div> 
            <div> Select your starting station</div>
            <Station station = "All Stations"/>
            {stations[color].map( (station) => {
                return <Station station = {station}/>;
            })}
        </div>
    );
}
