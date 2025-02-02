import { Link } from "react-router-dom";
import "./Header.css";
import usOnlineStatus from "../utils/useOnlineStatus";

function Header(){
    const onlineStatus = usOnlineStatus();

    return(
        <div className="flex justify-around border-b-2 border-slate-200 bg-amber-50">
           <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt=""
           height="100px"
           width="100px" 
           className=" rounded-full"
           />
           <ul className="flex justify-center items-center gap-6">
            <li>{onlineStatus ? "🟢" : "🔴"}</li>
            <Link to="/"><li>Home</li></Link>
            <Link to="/search"> <li>Search</li></Link>
            <Link><li>Offers</li></Link>
            <Link to="/signIn"><li>SignIn</li></Link>
            <li>Help</li>
            <li>Cart</li>
           </ul>
        </div>
    )
}

export default Header;