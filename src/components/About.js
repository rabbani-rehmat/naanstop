import User from "./User";
import UserClass from "./UserClass";



const About =() => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is React Tutorial</h2>
            {/* <User name={"Akshay Saini(function)"} location= {"Bhubaneswar"}/> */}

            <UserClass name={"Akshay Saini(classes)"} location= {"Bhubaneswar"}/>
        </div>
    );
};

export default About;