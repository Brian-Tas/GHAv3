import Title from "../Components/Title";
import Selector from "../Components/Selector/Selector";
import Transition from "../Components/Transition/Transition";
import SeparaterLine from "../Components/Separater Line/SeparaterLine";
import Lorem from "../Components/Lorem";

function Thermometry() {
    return (
        <div className="page-container">
            <Title/>
            <Selector/>
            <Transition source="../../public/bee.jpg"/>
            
            {/*Thermomentry Opening Cards*/}
            <SeparaterLine/>
            <div className="grid grid-cols-3 grid-rows-1 gap-8">
                <div>
                    <h2 className="subheading">Heading 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, accusantium? Esse perspiciatis obcaecati id dolores recusandae. Nam, alias neque sed accusamus ipsa sunt! Molestiae omnis voluptates recusandae odit, delectus tempore.
                    Esse rerum officia eius soluta id alias quis, nihil autem. Facilis, itaque reprehenderit! Quo eos ad quisquam impedit eaque, id quia nostrum! Quidem nostrum eligendi aspernatur vel quod. Recusandae, neque.</p>
                </div>
                <div>
                    <h2 className="subheading">Heading 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, accusantium? Esse perspiciatis obcaecati id dolores recusandae. Nam, alias neque sed accusamus ipsa sunt! Molestiae omnis voluptates recusandae odit, delectus tempore.
                    Esse rerum officia eius soluta id alias quis, nihil autem. Facilis, itaque reprehenderit! Quo eos ad quisquam impedit eaque, id quia nostrum! Quidem nostrum eligendi aspernatur vel quod. Recusandae, neque.</p>
                </div>
                <div>
                    <h2 className="subheading">Heading 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, accusantium? Esse perspiciatis obcaecati id dolores recusandae. Nam, alias neque sed accusamus ipsa sunt! Molestiae omnis voluptates recusandae odit, delectus tempore.
                    Esse rerum officia eius soluta id alias quis, nihil autem. Facilis, itaque reprehenderit! Quo eos ad quisquam impedit eaque, id quia nostrum! Quidem nostrum eligendi aspernatur vel quod. Recusandae, neque.</p>
                </div>
            </div>

            {/*Thermometry Content Grid*/}
            <SeparaterLine/>
            <div className="grid grid-rows-2 grid-cols-8 gap-4">
                <div className="col-span-2 row-span-2">
                    <Lorem length="4"/>
                </div>
                <div className="col-span-2">
                    <Lorem length="2"/>
                </div>
                <div className="col-span-2">
                    <Lorem length="2"/>
                </div>
                <div className="col-span-2">
                    <Lorem length="2"/>
                </div>
                <div className="col-span-2">
                    <Lorem length="2"/>
                </div>
                <div className="col-span-2">
                    <Lorem length="2"/>
                </div> 
                <div className="col-span-2">
                    <Lorem length='2'/>
                </div>  
            </div>
        </div>
    );
}

export default Thermometry;