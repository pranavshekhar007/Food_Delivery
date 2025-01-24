function ResturantCard(props){
    const {name, rating, deliveryTime, cuisines, location, imageUrl} = props.details;
    return (
        <>
            <div className="m-8 w-52">
                <img src={imageUrl} alt="" 
                width="200px"
                className=" rounded-md h-44 w-52"/>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <span>{rating}</span>
                    <span>{deliveryTime}</span>
                    <p>{cuisines}</p>
                    <p className="">{location}</p>
            </div>
        </>
    )
}

export default ResturantCard;