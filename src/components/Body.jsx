import ResturantCard from "./ResturantCard";
import { resturants } from "../utils/mockData";
import { useState } from "react";
import "./Body.css";

function Body(){

    const [filteredResturants, setFilteredResturants] = useState(resturants);
    const [isRatingClicked, setIsRatingClicked] = useState(false);
    const [isFastDeliveryClicked, setIsFastDeliveryClicked] = useState(false);

    function handleRating(){
        if(!isRatingClicked){
            const filteredRes = filteredResturants.filter(
                (resturant) => resturant.rating >= 4
            );
            setFilteredResturants(filteredRes);
            setIsRatingClicked(!isRatingClicked);
            console.log("came here");        
        }
    }

    function handleFastDelivery(){
        if(!isFastDeliveryClicked){

            const filterFastDeliveryRest = filteredResturants.filter(resturant =>
                resturant.deliveryTime.split("-")[1] <= 40
            );
            setFilteredResturants(filterFastDeliveryRest);
            setIsFastDeliveryClicked(!isFastDeliveryClicked);
        }
    }

    function handleRemoveFilter(){
        setIsRatingClicked(!isRatingClicked);
        if(isFastDeliveryClicked){
            handleFastDelivery();
        }else {
            setFilteredResturants(resturants);
        }
    }

    function handleRemoveFastDeliveryFilter(){
        setIsFastDeliveryClicked(!isFastDeliveryClicked);

        if(isRatingClicked){
            handleRating();
        } else {
            setFilteredResturants(resturants);
        }
    }
    return(
        <div className="mx-auto w-5/6">
            <h1 className="font-bold p-6 text-2xl">Resturant with online food delivery</h1>
            <div className="flex">
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5">Filter</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Sort By</button>
                <button 
                    className={`rounded-lg border border-slate-400 p-1.5 mx-5 flex items-center 
                        ${isRatingClicked ? "bg-slate-100": ""}
                        `}
                        onClick={handleRating}
                >
                    <div>Rating 4.0+</div>
                    {isRatingClicked ? (
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={handleRemoveFilter}

                     >
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                   </svg>
                    ):(
                        ""
                    )}
                </button>
                <button 
                    className={`rounded-lg border border-slate-400 p-1.5 mx-5 flex items-center 
                        ${isFastDeliveryClicked ? "bg-slate-100": ""}
                        `}
                        onClick={handleFastDelivery}
                >
                    <div>Fast Delivery</div>
                    {isFastDeliveryClicked ? (
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={handleRemoveFastDeliveryFilter}

                     >
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                   </svg>
                    ):(
                        ""
                    )}
                </button>
                
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Pure Veg</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Offers</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Rs. 300-Rs. 600</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 "> Less Than Rs. 300</button>
            </div>
            <div className="flex flex-wrap">
                {filteredResturants.map((resturant) => (
                    <ResturantCard details={resturant} />
                ))}
            </div>
        </div>
    )
}
export default Body;