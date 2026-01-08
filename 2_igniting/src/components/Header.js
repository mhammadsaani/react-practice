import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

export default function Header() {
  const [isLogin, setLogin] = useState(false);
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
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
