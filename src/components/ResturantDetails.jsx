import { useParams } from "react-router-dom";

function ResturantDetails(){
    const params = useParams();
    console.log(params);

    return (
        <>
            <h1>Resturant Details</h1>
            <p>Resturants id : {params.id}</p>
        </>
    )
}

export default ResturantDetails;