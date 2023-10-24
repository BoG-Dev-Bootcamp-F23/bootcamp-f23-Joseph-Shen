import "./Station.css"

export default function Station(props) {
    let station = props.station;
    let updateStation = props.updateStation
    return (
        <div className="station" onClick = {() => { updateStation(station); }}> {station}</div>
    );
}