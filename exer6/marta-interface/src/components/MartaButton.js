import "./MartaButton.css"

export default function MartaButton(props) {
    return (
        <button className="marta-button"> {props.name} </button>
    );
}