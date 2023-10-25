import "./Station.css"

export default function Station(props) {
    let station = props.station;
    let updateStation = props.updateStation
    let activate = props.activate
    return (
        <div className={station === activate?"activate-station" : "station"} onClick = {() => { updateStation(station); }}> {station}</div>
    );
}