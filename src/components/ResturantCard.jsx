function ResturantCard(props){
    const {name, rating, deliveryTime, cuisines, location, imageUrl} = props.details;
    return (
        <>
            <div className="m-8 w-52 hover:scale-95">
                <img src={imageUrl} alt="" 
                width="200px"
                className=" rounded-md h-44 w-54 object-cover "/>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <span>{rating}</span>
                    <span>{deliveryTime} min</span>
                    <p>{cuisines}</p>
                    <p className="">{location}</p>
            </div>
        </>
    )
}

export default ResturantCard;