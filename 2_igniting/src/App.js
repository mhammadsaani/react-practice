import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantInfo from "./components/RestaurantInfo";
import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantInfo /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hi, Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
