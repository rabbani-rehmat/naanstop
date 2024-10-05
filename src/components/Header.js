import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utility/constants";



const Header = () => {

    const [btnNameReact, setBtnNameReact]  = useState("Login");
    console.log("Header render");
//If no dependency array => useEffect is called on every component render
// If dependency array is empty=[] => useEffect is called only on initial render(only once)
//if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    useEffect(() => {
        console.log("useEffect Called");
    }, []);

    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo" 
                src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                        onClick={() =>{
                            btnNameReact == "Login"
                       ? setBtnNameReact ("Logout") : setBtnNameReact("Login");

                    }}
                    >
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}


export default Header;