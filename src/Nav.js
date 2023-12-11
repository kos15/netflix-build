import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Nav.css";
function Nav() {
  const [showNavBar, handelShowNavBar] = useState(false);
  const routeNavigator = useNavigate();

  const transition = () => handelShowNavBar(window.scrollY > 100);

  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => window.removeEventListener("scroll", transition);
  }, []);

  return (
    <div className={`nav ${showNavBar && "nav_black"}`}>
      <div className="nav_contents">
        <img
        onClick={() => routeNavigator("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <img
        onClick={() => routeNavigator("./profile")}
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Nav;
