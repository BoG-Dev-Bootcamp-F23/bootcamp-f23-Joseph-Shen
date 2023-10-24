import Train from "../components/Train.js"
// import arrivals from "../servers/trainData.js"

function f(Arrival, Station) {
    if (Station === "All Stations") return true;
    let arrivalStation = Arrival.split(' ')[0];
    let station = Station.split(' ')[0];
    arrivalStation = arrivalStation.toLowerCase()
    station = station.toLowerCase()
    return arrivalStation === station;
}

export default function TrainList(props) {
    let color = props.color
    let arrivals = props.data
    let station = props.station
    console.log(arrivals)
    return (
        <div> {arrivals.map(
            (arrival) => {
                if (arrival.LINE === color && f(arrival.STATION, station)) return <Train {...arrival} />
            }
        )}</div>
    );
}