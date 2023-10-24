import "./MartaButton.css"

export default function MartaButton(props) {
    let state = props.status
    let update = props.update
    return (
        <button className="marta-button" onClick = {() => { update(!state)}}> {props.name} </button>
    );
}