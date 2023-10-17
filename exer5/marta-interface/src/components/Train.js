const color2value = {
    "GOLD" : "#e8b60d",
    "BLUE" : "#077ca9",
    "GREEN" : "#5da73a",
    "RED" : "#bf3b3c"
};

export default function Train(props) {
    let color = color2value[props.LINE];
    let ontime, ontime_color;
    if (props.DELAY === "T0S") {
        ontime = "On time";
        ontime_color = "#5da73a";
    }
    else {
        ontime = "Delayed";
        ontime_color = "#bf3b3c";
    }

    let val = props.WAITING_TIME.split(" ")[0]

    return (
        <div>
            <div className = "left">
                <h1>M</h1>
                <div className = "middle">
                    <div className = "info1">
                        {props.STATION} -`{'>'}` {props.DESTINATION}
                    </div>
                    <div className = "info2">
                        <div className = "line"> {props.LINE}</div>
                        <div className = "ontime"> {ontime}</div>
                    </div>
                </div>
            </div>

            <div className = "right">
                <div> {val}</div>
                <div> min </div>
            </div>
        </div>
    )
}