import "./Transition.css";

function Transition(props) {
    return (
        <div className="transition-container">
            <img src={props.source} className="transition-image"></img>
        </div>
    );
}

export default Transition;