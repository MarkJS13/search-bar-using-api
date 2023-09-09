import { useContext } from "react";
import { MyContext } from "../App";

const Result = () => {
    const [ data ] = useContext(MyContext);

    
    return(
        <div className="search-results">
        
            {data && data.map((people, key) => {
                return <div className="result" key={key}> <p> {people.name} </p> </div>
            })}
            
        </div>
    )
}

export default Result;