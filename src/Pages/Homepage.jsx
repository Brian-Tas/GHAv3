import Title from "../Components/Title.jsx";
import Transition from '../Components/Transition/Transition.jsx';
import Selector from '../Components/Selector/Selector.jsx';
import SeparaterLine from "../Components/Separater Line/SeparaterLine.jsx";
import Lorem from "../Components/Lorem.jsx";

function Homepage() {
  return (
    <div className="page-container">
      <Title/>
      <Selector/>
      <Transition source="public\flowers.jpg"/>

      {/*Welcome message*/}
      <SeparaterLine/>
      <div className="mx-24">
        <h1 className="heading">
            Welcome to Gentle Health Assessments!
        </h1>

        {/*4 Collumns*/}
        <SeparaterLine/>
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
            <div>
                <h2 className="subheading">Regulation Thermometry</h2>
                <SeparaterLine/>
                <img src="public/children.jpg" className="rounded-lg" alt='children in field'></img>
                <br/>
                <p>Chronic illness develops over time. Whole-Body Thermometry can identify underlying causes, often long before symptoms develop, so healing can begin.</p>
                <br/>
                <p>Preventive care for men, women, and children</p>
                <img src='public\thermometry-list.jfif.crdownload' className="h-72 mx-auto" alt='What thermometry covers'></img>
            </div>
            <div>
                <h2 className="subheading">Other Tests and Labs</h2>
                <SeparaterLine/>
                <h1>HRV - Heart Rate Variability</h1>
                <br/>
                <ul>
                  <li>• ANS Regulation</li>
                  <li>• EMF Sensitivity</li>
                </ul>
                <br/>
                <img src="public/heart-monitor.jpg" alt="heart monitor" className="rounded-lg"/>
                <br/>
                <p>HMT - Heavy Metal Test</p>
                <p className="mx-4 my-3 text-gray-600 font-medium text-xl"><i>Heavy Metals play a significant role in chronic illness. This simple affordable screening will show you how burdened your body is with these toxins.</i></p>
                <br/>
                <p>OAT - Mosaic DX</p>
                <br/>
                <p>PCI - Parasitology Lab</p>
                <br/>
                <p>FGA - Functional Genomic Analysis</p>
            </div>
            <div>
                <h2 className="subheading">Treatments</h2>
                <SeparaterLine/>
                <h1>MRT - Matrix Regeneration Therapy</h1>
                <br/>
                <img src="public/medical-machine.jpg" className="rounded-lg" alt="Medical machine" />
                <br/>
                <p className="text-xl">Because of its holistic therapeutic approach to thorough basic detoxification, MRT can be applied successfully to all chronic diseases. It is the best preparation for any subsequent follow-up therapy. Its indications thus cover a broad spectrum.</p>
            </div>
            <div>
                <Lorem length='2'/>
            </div>
        </div>

        {/*Next section*/}
        <SeparaterLine/>
      </div>
      

    </div>
  );
}

export default Homepage;