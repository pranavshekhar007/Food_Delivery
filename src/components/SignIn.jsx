import Search from "./Search";
import SearchClassBased from "./SearchClassBased";

function SignIn(){
    return (
        <>
            <h1>Sign In Component</h1>
            <Search name="Pranav"/>
            <SearchClassBased name="Golu"/>
        </>
    )
}

export default SignIn;