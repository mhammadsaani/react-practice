import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/restaurant";
import { useState } from "react";

function Body() {
  const [res, setRes] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="btn"
          onClick={() => {
            setRes(() => {
              return res.filter((restaurant) => {
                return restaurant.info.avgRating > 4;
              });
            });
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
