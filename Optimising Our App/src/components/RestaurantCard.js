import { IMG_CDN_URL } from "../../constant";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card shadow-2xl rounded-xl   text-white m-5  bg-slate-700  w-72 h-auto">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-t" />
      <h3 className="bg-[#1b263b] p-8 mt-[1px] text-center ">{name}</h3>
      <div className="opacity-75 text-center ">
      <h5 className="bg-slate-700">{cuisines.join(", ")}</h5>
      <div className="bg-slate-600">
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
    </div>
    </div>
  );
};

export default RestaurantCard;
