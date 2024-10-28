import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utility/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utility/useOnlineStatus";


const Header = () => {

    const [btnNameReact, setBtnNameReact]  = useState("Login");

    const onlineStatus = useOnlineStatus();
    
//If no dependency array => useEffect is called on every component render
// If dependency array is empty=[] => useEffect is called only on initial render(only once)
//if dependency array is [btnNameReact] => called everytime btnNameReact is updated
    

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img
                className="w-48" 
                src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact"> Contact Us</Link></li>
                    <li className="px-4">Cart</li>
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
    );
};


export default Header;