import ResturantCard from "./ResturantCard";
import { resturants } from "../utils/mockData";
import { useEffect, useState } from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useContext } from "react";

function Body(){

    const [filteredResturants, setFilteredResturants] = useState(resturants);

    const [filters, setFilters] = useState({
        ratings: false,
        fastDelivery: false,
    });

    const userDetails = useContext(userContext);

    useEffect(() =>{
        setFilteredResturants(
            resturants.filter((resturant) =>{
                const {ratings, fastDelivery} = filters;

                if(!ratings && !fastDelivery){
                    return resturants;
                } else {
                    return ratings && fastDelivery
                    ? resturant.rating >= 4 &&
                        resturant.deliveryTime.split("-")[1] <= 40
                    : ratings 
                    ? resturant.rating >= 4
                    : resturant.deliveryTime.split("-")[1] <= 40;
                }
            })
        );
    }, [filters]);

    function handleFilterUpdate(filter){
        const value = 
        filter === "ratings" ? !filters.ratings : !filters.fastDelivery;

        setFilters((prev) => ({...prev, [filter]: value}));
    }
    return(
        <div className="mx-auto w-5/6">
            <h1 className="font-bold p-6 text-2xl">Resturant with online food delivery</h1>

            <input type="text" className="border m-5 border-blue-500" onChange={(e) => userDetails.setUserName(e.target.value)}/>

            <div className="flex">
                <button className=" p-1.5 mx-5">Filter</button>
                <button className=" p-1.5 mx-5 ">Sort By</button>
                <button 
                    className={` p-1.5 mx-5 flex items-center 
                        ${ filters.ratings ? "bg-slate-100": ""}
                        `}
                        onClick={() => handleFilterUpdate("ratings")}
                >
                    <div>Rating 4.0+</div>
                    {filters.ratings ? (
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={() => handleFilterUpdate("ratings")}

                     >
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                   </svg>
                    ):(
                        ""
                    )}
                </button>
                <button 
                    className={` p-1.5 mx-5 flex items-center 
                        ${filters.fastDelivery ? "bg-slate-100": ""}
                        `}
                        onClick={() => handleFilterUpdate("fastDelivery")}
                >
                    <div>Fast Delivery</div>
                    {filters.fastDelivery ? (
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="16" 
                        height="16" 
                        fill="currentColor" 
                        className="bi bi-x ml-2" 
                        viewBox="0 0 16 16"
                        onClick={() => handleFilterUpdate("fastDelivery")}

                     >
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                   </svg>
                    ):(
                        ""
                    )}
                </button>
                
                <button className=" p-1.5 mx-5 ">Pure Veg</button>
                <button className=" p-1.5 mx-5 ">Offers</button>
                <button className=" p-1.5 mx-5 ">Rs. 300-Rs. 600</button>
                <button className=" p-1.5 mx-5 "> Less Than Rs. 300</button>
            </div>
            <div className="flex flex-wrap">
                {filteredResturants.map((resturant) => (
                    <Link to={`/resturant/${resturant.id}`}> 
                    <ResturantCard details={resturant} />
                    </Link>   
                ))}
            </div>
        </div>
    )
}
export default Body;

// useEffect Hook ---->

// API ----> client ------ Server ----- database

// fetch resturants --- some ms

// render UI -----> Loading ----> useEffect -----> API call -----> data ----- update UI
// [] -> empty dependency array
// code which is inside useEffect will be executed only once