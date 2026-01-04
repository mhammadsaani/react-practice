import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

export default function Header() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              setLogin(!isLogin);
            }}
            className="btn"
          >
            {isLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
}
