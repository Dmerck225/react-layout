import "../css/Tree.css";
import {useState} from "react";

const Tree = (tree) => {
    const[pruned, pruneTree] = useState(false); //pruned is set to false, will be changed by calling pruneTree
    
    const doTreeJob = () => {
        pruneTree(true);
    };

    return (
        <section className="tree">
            <h3 className={pruned ? "pruned" : ""}>{tree.name}</h3>
            <img src={tree.image} alt={tree.name} />
            <button onClick={doTreeJob}>Prune Tree</button>
        </section>
    );
};

export default Tree;