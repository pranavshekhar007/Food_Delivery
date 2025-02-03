import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "PranavSHekhar",
    printName: function () {
        console.log("Function Inside Context");
    },
});

export default userContext;