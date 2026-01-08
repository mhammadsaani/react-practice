import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

export default function RestaurantCard(props) {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    resData.info;
  return (
    <Link to={"/restaurant/" + id}>
      <div className="res-card">
        <img className="res-card-img" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <h5>{sla.deliveryTime} minutes</h5>
      </div>
    </Link>
  );
}
