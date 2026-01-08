import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import restaurants from "../utils/restaurant";
function Body() {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState(res);
  const [inputSearch, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // const response = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await response.json();
    // console.log(json);

    // setRes(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRes(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setRes(restaurants);
    setFilteredRes(restaurants);
  }

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="search-box"
            value={inputSearch}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              const updatedRes = res.filter((restaurant) => {
                console.log("Checking");
                return restaurant.info.name
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase());
              });
              setFilteredRes(updatedRes);
            }}
          >
            Search
          </button>
          <button
            className="btn"
            onClick={() => {
              setFilteredRes((res) => {
                return res.filter((restaurant) => {
                  return restaurant.info.avgRating >= 4.3;
                });
              });
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
