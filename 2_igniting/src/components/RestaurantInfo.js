import { useEffect } from "react";
import restaurants from "../utils/restaurant";
import { useParams } from "react-router-dom";

export default function RestaurantInfo() {
  const { resId } = useParams();
  console.log(resId);
  let restaurant = restaurants.filter((res) => res.info.id == resId);
  const res = restaurant[0];

  // const html = res.info.cuisines.map((cuisine, index) => (
  //   <li key={index}>{cuisine}</li>
  // ));

  // useEffect(() => {s
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   console.log("Component mounted");
  //   const res = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=38634"
  //   );

  //   const data = await res.json();
  //   console.log(data);
  // }

  return (
    <>
      <div>
        <div>
          <h1>{res.info.name}</h1>
          <ul>
            {res.info.cuisines.map((cuisine, index) => (
              <li key={index}>- {cuisine}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
