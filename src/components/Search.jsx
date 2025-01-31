import { useState } from "react";

function Search(props){
    const [count, setCount] = useState(0);
    function handle(){
        setCount(count + 1);
    }

    return(
        <>
            <h1>I am A Search Component</h1>
            <p>{props.name}</p>
            <p>count:{count}</p>
            <button onClick={handle}> Click me</button>
        </>
    )
}

export default Search;