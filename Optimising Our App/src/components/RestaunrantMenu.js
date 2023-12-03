import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constant";
 import { SWIGGY_RESTURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
  const params=useParams();
    const {id}=params;
    const [restaurant, setRestauraunt] = useState(null);
  
     useEffect(()=>{
    getRestaurnatInfo();
   },[]);

  async function getRestaurnatInfo(){
    const data = await fetch(SWIGGY_RESTURANT_MENU_URL+id );
    const json=await data.json();
    const resInfo=json.data?.cards[0]?.card?.card?.info;
    console.log(resInfo);
    setRestauraunt(resInfo);

};


    return(!restaurant)?<Shimmer/>: (
        <div>
            <h1>Restaurant id:{id}</h1>
            
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} />
            <h4>{restaurant.name}</h4>
             <h4>Rating is :{restaurant.avgRating}</h4>
             <h5>Offer: {restaurant.costForTwoMessage}</h5>
        </div>
    )
 }

 export default RestaurantMenu;