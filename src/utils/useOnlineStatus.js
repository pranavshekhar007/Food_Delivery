import { useState } from "react";


function usOnlineStatus(){
    const [onlineStatus, setOnlineStatus] = useState(true);

    window.addEventListener("online", ()=> {
        setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    });

    return onlineStatus;
}

export default usOnlineStatus;