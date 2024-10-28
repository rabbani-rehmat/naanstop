import {useState, useEffect} from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        //Api calls
    }, []);

    
    return (
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: Bhubaneswar</h3>
        <h4>Contact: @akshaymarch7</h4>
     </div>
    );
};

export default User;