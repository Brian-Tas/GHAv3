import "./Selector.css";
import Button from "../Button/Button.jsx";

function Selector() {
    return (
        <div className="selector-container">
            <Button link="GHAv3/" label="• Home" otherClasses="selector"/>
            <Button link="GHAv3/Thermometry" label="• Thermometry" otherClasses="selector"/>
            <Button link="GHAv3/Other-Tests" label="• Other Tests" otherClasses="selector"/>
            <Button link="GHAv3/Contact" label="• Contact" otherClasses="selector"/>
        </div>
    );
}

export default Selector;