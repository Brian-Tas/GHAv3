import "./Selector.css";
import Button from "../Button/Button.jsx";

function Selector() {
    return (
        <div className="selector-container">
            <Button link="" label="• Home" otherClasses="selector"/>
            <Button link="Thermometry" label="• Thermometry" otherClasses="selector"/>
            <Button link="Other-Tests" label="• Other Tests" otherClasses="selector"/>
            <Button link="Contact" label="• Contact" otherClasses="selector"/>
        </div>
    );
}

export default Selector;