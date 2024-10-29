import Tree from "../components/Tree.js";
import "../css/Home.css";

const Home = () => {
    return (
        <div class="trees">
            <Tree name="Bald Cypress" image="images/bald-cypress.jpeg"/>
            <Tree name="Eastern Redbud" image="images/redbud.jpeg"/>
            <Tree name="Live Oak" image="images/live-oak.jpeg"/>
        </div>
        
    );
};

export default Home;