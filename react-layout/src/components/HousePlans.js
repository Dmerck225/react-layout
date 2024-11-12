import "../css/HousePlans.css";
import {useState, useEffect} from "react"; // useEffect will not run code immidiately
import axios from "axios";
import HousePlan from "./HousePlan";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    // wait until after page is rendered to do the async loading
    useEffect(() => {
    (async () => {
        const response = await axios.get("https://portiaportia.github.io/json/house-plans.json");
        setHouses(response.data);
    })();
    }, []); // once the page is rendered we will execute whatever is in the function

    return (
        <div className="house-plans">
            <h3>House Plans</h3>
            {houses.map((housePlan)=>(
                <HousePlan 
                    name={housePlan.name}
                    size={housePlan.size}
                    bedrooms={housePlan.bedrooms}
                    bathrooms={housePlan.bathrooms}
                />
            ))}
        </div>
    );
};