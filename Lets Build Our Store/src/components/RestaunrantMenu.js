import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constant";
 import { SWIGGY_RESTURANT_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
  const params=useParams();
    const {id}=params;
    const [restaurant, setRestauraunt] = useState(null);
    const[menu,setMenu]=useState(null);

     useEffect(()=>{
     
    getRestaurnatInfo();
   },[]);

  async function getRestaurnatInfo(){
    const data = await fetch(SWIGGY_RESTURANT_MENU_URL+id );
    const json=await data.json();
   

    const resInfo=json.data?.cards[0]?.card?.card?.info;
   
    const menuInfo=json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards ;
  console.log(resInfo);
  console.log(menuInfo);
    setRestauraunt(resInfo);
    setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards);


};


    return(!restaurant)?<Shimmer/>: (
        <div className="menu w-max bg-slate-400">
          
            <h1 className="bg-slate-400  my-3">Restaurant id:{id}</h1>
            
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} className="mx-10 rounded-xl border-slate-950 border-8" />
            <h4>{restaurant.name}</h4>
             <h4 className="bg-slate-200 w-max p-3 rounded-md">Rating is :{restaurant.avgRating}</h4>
             <h5>Offer: {restaurant.costForTwoMessage}</h5>
             <h4>Veg:{(restaurant.veg)?"YES":"No So Sorry"}</h4>
             <h2 className="text-base font-bold px-80 border-b-4 border-slate-900">More Items</h2>
             
             <div>
             {menu?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" ">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
              
          {menu.map((item,index) => {
            return ( 
             <div className=" rounded-xl bg-slate-500 p-4 my-2 font-semibold  overflow-hidden" key={index}>
             
             <div>Name: {item.card.info.name}</div>
             {/* <div className="w-36 overflow-hidden">Description:  ({item.card.info.description})?{item.card.info.description}:""</div> */}
             <div>Special New Items</div>
             <div>Price: {item.card.info.price}</div>
              </div>
            
            );
          })}
        </div>
      )}
             

             </div>
        </div>
      
    )
 }

 export default RestaurantMenu;