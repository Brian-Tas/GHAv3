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
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officiis perferendis inventore officia, eaque reprehenderit enim eveniet impedit? Architecto ad velit possimus temporibus aliquid iure assumenda minima ipsum facilis tempore!
        Eius voluptatum at non facere numquam ad adipisci beatae blanditiis, asperiores necessitatibus! Distinctio maxime quasi quod quia, quisquam id alias fugit nostrum magnam expedita iste officia aliquid, amet autem quam.
        Maxime nesciunt saepe omnis praesentium nisi odit doloremque quis totam fuga beatae recusandae non voluptatibus esse, sequi perferendis pariatur, in dolore ipsum. Repellendus iusto cum molestiae culpa optio officiis repudiandae?
        </p>

        {/*4 Collumns*/}
        <SeparaterLine/>
        <div className="grid grid-cols-4 grid-rows-1 gap-8">
            <div>
                <Lorem length='2'/>
            </div>
            <div>
                <Lorem length='2'/>
            </div>
            <div>
                <Lorem length='2'/>
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