import "./Button.css"
import { Link } from 'react-router-dom';

function Button(props) {
    return(
        <div className="button-container">
            <Link to={`/${props.link}`}>
                <button className={`button whitespace-nowrap ${props.otherClasses}`}>{props.label}</button>
            </Link>
        </div>
    );
}

export default Button;