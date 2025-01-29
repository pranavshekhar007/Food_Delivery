import { useState } from "react";

function CounterExample(){
    const [a, setA] = useState(0);
    const [b , setB] = useState (0);
    const [togle, setTogle] = useState(true);
    const [name, setName] = useState("");

    function handleClick(){
        setA(a + 1);
    }

    return(
        <div className="w-20 h-20 border-black m-8">
            <p>a : {a}</p>
            <button className="border bg-slate-100" onClick={handleClick}>Update A</button>
            <p>b : {b}</p>
            <button onClick={()=> {setB(b+2)}}>Update B</button>
            <button onClick={()=> setTogle(!togle)}>TogleBtn</button>
            <p>{togle ? "On" : "Off"}</p>

            <input type="text" className="border border-black m-4" onChange={(e) => setName(e.target.value)} />
            <p>{name}</p>
        </div>
    )
}

export default CounterExample;