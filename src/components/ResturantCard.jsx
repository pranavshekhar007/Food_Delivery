import userContext from "../utils/userContext";
import { useContext } from "react";

function ResturantCard(props){
    const {name, rating, deliveryTime, cuisines, location, imageUrl} = props.details;

    const userDetails = useContext(userContext);
    return (
        <>
            <div className="m-8 hover:scale-95">
                <img src={imageUrl} alt="" 
                width="200px"
                className=" rounded-xl h-40 w-70 object-cover"/>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <span>{rating}</span>
                    <span> • {deliveryTime} min</span>
                    <p>{cuisines}</p>
                    <p className="">{location}</p>
                    <p>{userDetails.loggedInUser}</p>
            </div>
        </>
    )
}

export default ResturantCard;