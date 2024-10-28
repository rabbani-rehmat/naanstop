import { CDN_URL } from "../Utility/constants";

const RestaurantCard =(props) => {
    const{resData} = props;

    const{cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
    const{deliveryTime}=resData?.info.sla;
    
    return(
        <div className="m-3 p-4 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-500" >
            <img
            className="rounded-lg"
            alt="res-logo" 
            src={ CDN_URL+ cloudinaryImageId}
            />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) =>{
    return()=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard />
            </div>
        )
    }
}

export default RestaurantCard;