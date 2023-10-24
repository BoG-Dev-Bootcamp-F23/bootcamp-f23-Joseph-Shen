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

function getDirection1(currColor) {
    if (currColor === "GOLD" || currColor === "RED") return "Northbound";
    else return "Eastbound";
  }
  
  function getDirection2(currColor) {
    if (currColor === "GOLD" || currColor === "RED") return "Southbound";
    else return "Westbound";
  }

function ff(arrival, filter) {
    if (filter[0] && !(arrival.WAITING_TIME.split(' ')[0] === "Arriving")) return false;
    if (filter[1] && !(arrival.DELAY === "T0S")) return false;
    if (filter[2] && !(arrival.DIRECTION === getDirection1(arrival.LINE)[0])) return false;
    if (filter[3] && !(arrival.DIRECTION === getDirection2(arrival.LINE)[0])) return false;
    return true;
}

export default function TrainList(props) {
    let color = props.color
    let arrivals = props.data
    let station = props.station
    let filter = props.filter
    console.log(arrivals)
    console.log(filter)
    return (
        <div> {arrivals.map(
            (arrival) => {
                if (arrival.LINE === color && f(arrival.STATION, station) && ff(arrival, filter)) return <Train {...arrival} />
            }
        )}</div>
    );
}