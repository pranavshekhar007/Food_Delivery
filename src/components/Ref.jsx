import { useRef, useState } from "react";

function Ref() {
    let x = 0; // Local Variable

    const [y, setY] = useState(0); // state variable

    const z = useRef(0); // Reference Variable
    // console.log(z);

    function handleX(){
        x = x+1;
        console.log(x);
    }

    function handleY(){
        setY(y+1);
    }

    function handleZ(){
        z.current = z.current + 1;
        console.log(z.current);
    }
    return (
        <div className="w-72 h-72 border border-red-500">
            <h1 className="mx-5">X : {x}</h1>

            <button className="border m-5 border-black" onClick={() => handleX()}>
                Increase X
                </button>

                <h1 className="mx-5">Y : {y}</h1>
                <button className="border m-5 border-black" onClick={() => handleY()}>
                Increase y
                </button>

                <h1 className="mx-5">Z : {z.current}</h1>
                <button className="border m-5 border-black" onClick={() => handleZ()}>
                Increase Z
                </button>

        </div>
    )
}

export default Ref;


// useRef is a React Hook that lets you reference a value that’s not needed for rendering.