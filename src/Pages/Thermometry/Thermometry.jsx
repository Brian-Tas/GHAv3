import Title from "../../Components/Title";
import Selector from "../../Components/Selector/Selector";
import Transition from "../../Components/Transition/Transition";
import SeparaterLine from "../../Components/Separater Line/SeparaterLine";
import "./Thermometry.css";

function Thermometry() {
    return (
    <div className="page-container">
        <Title/>
        <Selector/>
        <Transition source="public\flowers.jpg"/>

        <SeparaterLine/>
        <div className="thermography-content-container">
            <img src="public/body-diagram.jpg" alt="diagram of body" id='body-diagram' />
            <div className="how-work">
                <h2 className="subheading">How Does It Work?</h2>
                <p>
                An infrared sensor measures skin 
                temperature at over 100 points on 
                the body before and after exposure
                to room temperature. Healthy organs
                respond to this cooling stimulus on
                the skin surface via the Autonomic
                Nervous System. How well your nervous
                system is able to influence the skin
                temperature at each point reveals
                information about the health of the
                underlying organs. Contributing factors
                to organ health are also  captured during
                the test. This integrative approach helps
                your doctor determine the therapies best
                suited for you, as well as additional
                tests that may be necessary to confirm findings.
                </p>
            </div>
            <div className="chronic-illness">
                <h2 className="subheading">Chronic Illness</h2>
                <p>Chronic illness develops over time.
                    Whole-Body Thermography can discover
                    disturbances that are important to
                    address in order to restore and
                    optimize your health.</p>
                <br/>
                <ul>
                    <li> • For early detection</li>
                    <li> • To identify root causes of illness</li>
                    <li> • To guide & monitor treatment</li>
                </ul>
            </div>
            <div className="unlike-other">
                <h2 className="subheading">Unlike Other-</h2>
                <p>Imaging tests like MRI, Mammogram, 
                    and Ultrasound are anatomical tests. 
                    Whole-Body Thermography is a functional 
                    test of organs and related systems.
                </p>
            </div>
            <div className="what-like">
                <SeparaterLine/>
                <h2 className="subheading">What is the Test Like?</h2>
                <p>The 30-minute test is gentle and non-invasive.
                    An initial set of measurements is taken. 
                    Then, to activate your body's regulatory
                    system, you stand at room temperature in
                    your underwear for a ten-minute cooling
                    period (those with trouble standing can
                    lean against a high stool). This is
                    followed by a second set of  measurements.
                    The test data is then computed by
                    the system and the results are returned
                    for consultation with your doctor.</p>
            </div>
            <div className="quote">
                <SeparaterLine/>
                <p className="subheading">Founded on 30 years of research
                    by European doctors specializing
                    in Integrative Medicine
                </p>
                <br/>
                <p className ="text-3xl"><i>“This technology is the most comprehensive
                     evaluation of the functioning of the
                      internal organs of the human body.”</i>
                </p>
                <br/>
                <p>
                    - Dr. Michael Einsohn, D.C.
                    Dallas Thermography Clinic
                </p>
            </div>
        </div>
        <SeparaterLine />
    </div>
    );
}

export default Thermometry;