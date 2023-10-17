import Train from "../components/Train.js"
// import arrivals from "../servers/trainData.js"

export default function TrainList(props) {
    let color = props.color
    let arrivals = props.data
    return (
        <div> {arrivals["RailArrivals"].map(
            (arrival) => {
                if (arrival.LINE === color) return <Train {...arrival} />
            }
        )}</div>
    );
}