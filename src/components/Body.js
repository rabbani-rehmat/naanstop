import RestaurantCard,{ withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utility/useOnlineStatus";

const Body = () => {
//Local State Variable- Super powerful variable
    const [ListOfRestaurants, setListOfRestaurant ] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [ searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=> {
       fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const json = await data.json();   
    //console.log(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  ; 
        
    };
    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false) return (
    <h1>
        Looks Like you're offline!!  Please check your internet connection
    </h1>
    );

    // if(ListOfRestaurants.length == 0){
    //     return <Shimmer />
    // }

    return  ListOfRestaurants.length==0? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-2 p-2 flex items-center">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="items-center px-4 py-2 bg-green-100 m-3"
                     onClick={() =>{
                        console.log(searchText);
                       const filteredRestaurant = ListOfRestaurants.filter((res) => 
                        
                        res.info.name.toLowerCase().includes (searchText.toLowerCase()));

                       setFilteredRestaurant(filteredRestaurant);     

                    }}> Search</button>
                </div>
                <div>
                <button className=" items-center flex px-3 py-2 bg-gray-100" 
                onClick={() =>{
                    const filteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5);
                       setListOfRestaurant(filteredList);
                    }}
                    >
                    Top Rated Restaurants    
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
            {
                filteredRestaurant.map((restaurant) => 
                    (
                     <Link 
                            key={restaurant.info.id}
                            to={"/restaurants/"+ restaurant.info.id}
                        >
                            
                            <RestaurantCard  resData= {restaurant} /> 
                     </Link>
                    )
                )
            }
            
            </div>
        </div>
    );
};






export default Body;