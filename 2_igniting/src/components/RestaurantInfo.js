import { useEffect } from "react";

export default function RestaurantInfo() {
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("Component mounted");
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=38634"
    );

    const data = await res.json();
    console.log(data);
  }
  return (
    <>
      <div>
        <h1>Name</h1>
        <h2>Menu</h2>
        <ul>
          <li>Biryani</li>
          <li>Burgers</li>
          <li>Diet Coke</li>
        </ul>
      </div>
    </>
  );
}
