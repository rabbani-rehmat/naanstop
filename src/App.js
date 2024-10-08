import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RestaurantCard } from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

//optimised

const AppLayout = () =>{
    return(
        <div className ="app">
            <Header />
            <Body />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
       path: "/" ,
       element: <AppLayout />,
       children:[
        {
            path:"/",
            element:"<Body />"
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        }
        
       ],
       errorElement: <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);