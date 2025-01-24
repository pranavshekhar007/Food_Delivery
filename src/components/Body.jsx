import ResturantCard from "./ResturantCard";

function Body(){
    const resturants = [
        {
            name: "Chinese work",
            rating: "4.2",
            deliveryTime: "50-55mins",
            cuisines: "Chinese, Asian, Tibetan",
            location: "VVip Style mall",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        },
        {
            name: "Pizza Hut",
            rating: "4.4",
            deliveryTime: "35-40mins",
            cuisines: "Pizza",
            location: "Rajnagar",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        },
        {
            name: "Chinese work",
            rating: "4.2",
            deliveryTime: "50-55mins",
            cuisines: "Chinese, Asian, Tibetan",
            location: "VVip Style mall",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        },
        {
            name: "Pizza Hut",
            rating: "4.4",
            deliveryTime: "35-40mins",
            cuisines: "Pizza",
            location: "Rajnagar",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        },
        {
            name: "Chinese work",
            rating: "4.2",
            deliveryTime: "50-55mins",
            cuisines: "Chinese, Asian, Tibetan",
            location: "VVip Style mall",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        },
        {
            name: "Pizza Hut",
            rating: "4.4",
            deliveryTime: "35-40mins",
            cuisines: "Pizza",
            location: "Rajnagar",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        },
        {
            name: "Chinese work",
            rating: "4.2",
            deliveryTime: "50-55mins",
            cuisines: "Chinese, Asian, Tibetan",
            location: "VVip Style mall",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        },
        {
            name: "Pizza Hut",
            rating: "4.4",
            deliveryTime: "35-40mins",
            cuisines: "Pizza",
            location: "Rajnagar",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        },
        {
            name: "Chinese work",
            rating: "4.2",
            deliveryTime: "50-55mins",
            cuisines: "Chinese, Asian, Tibetan",
            location: "VVip Style mall",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        },
        {
            name: "Pizza Hut",
            rating: "4.4",
            deliveryTime: "35-40mins",
            cuisines: "Pizza",
            location: "Rajnagar",
            imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        },

    ]
    return(
        <div className="mx-auto w-5/6">
            <h1 className="font-bold p-8 text-xl">Resturant with online food delivery</h1>
            <div className="">
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Filter</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Sort By</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Fast Delivery</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Rating 4.0+</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Pure Veg</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Offers</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 ">Rs. 300-Rs. 600</button>
                <button className="rounded-lg border border-slate-400 p-1.5 mx-5 "> Less Than Rs. 300</button>
            </div>
            <div className="flex flex-wrap">
                {resturants.map((resturant) => (
                    <ResturantCard details={resturant} />
                ))}
            </div>
        </div>
    )
}
export default Body;