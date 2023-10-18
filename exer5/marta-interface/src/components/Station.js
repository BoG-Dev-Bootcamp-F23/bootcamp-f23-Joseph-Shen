import "./Station.css"

export default function Station(props) {
    let station = props.station;
    return (
        <div className="station"> {station}</div>
    );
}