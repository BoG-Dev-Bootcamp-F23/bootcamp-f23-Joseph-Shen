
import Station from "./Station.js"

export default function NavBar(props) {
    let color = props.color
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
