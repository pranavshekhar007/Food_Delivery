import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

function Memo(){
    const [number, setNumber] = useState("");
    const [isdarkTheme, setIsDarkTheme] = useState(false);
    const nthPrime = useMemo(()=> findPrime(number), [number]);
 
    return (
        <>
            <h1>UnderStanding useMemo Hook</h1>

            <div className="w-72 h-72 border border-blue-500 m-5"
                style={
                    isdarkTheme ? {backgroundColor: "lightgray"}
                    : {backgroundColor: "white"}
                }
            >
                <input type="number" className="border m-2"
                    onChange={(e) => setNumber(e.target.value)} 
                />
                <h2 className="font-bold m-5">nth Prime Nimber: {nthPrime}</h2>

            <button className="border bg-slate-50 m-5"
                onClick={() => setIsDarkTheme(!isdarkTheme)}
            >Toggle theme</button>    
            </div>
        </>
    )
}

export default Memo;

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.