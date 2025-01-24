function Header(){
    return(
        <div className="flex  justify-between border-b-2 border-slate-200">
           <img src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt=""
           height="100px"
           width="100px" />
           <ul className="flex justify-center items-center gap-6">
            <li>Home</li>
            <li>Search</li>
            <li>Offers</li>
            <li>Help</li>
            <li>SignIn</li>
            <li>Cart</li>
           </ul>
        </div>
    )
}

export default Header;