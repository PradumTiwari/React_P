import { IMAGE_CDN_URL } from "../config";

const RestrauntCard = ({
  cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,

}) => {
  return (
    <div className="card-details">
      <div className="card">
        <img src={IMAGE_CDN_URL + cloudinaryImageId} />
        <div className="ratings">
          <p style={{ margin: "0" }}>
            <strong>{name}</strong>
          </p>
        </div>
        <small>{cuisines.join(", ")}</small> <br /> <br />
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <small
            style={avgRating > 3 ? { color: "green" } : { color: "orange" }}
          >
            {avgRating}
          </small>
          <small>{costForTwo}</small>{" "}
          <small>{deliveryTime}</small>
        </p>
      </div>
    </div>
  );
};

export default RestrauntCard;
