import { useEffect, useState } from "react";


function usOnlineStatus(){
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const online = window.addEventListener("online", ()=> {
            setOnlineStatus(true);
        });
    
        const offline = window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        return() => {
            window.removeEventListener(online, () =>{
                console.log("online Event remove");
            })
            window.removeEventListener(offline, () =>{
                console.log("offline Event removed");
            })
        }
    },[]);

    return onlineStatus;
}

export default usOnlineStatus;