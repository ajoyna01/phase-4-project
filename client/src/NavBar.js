import React from "react";
import { NavLink } from "react-router-dom";




  function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }


return (
<div className="wrapper">

  <NavLink to="/"
  exact
  >
    CamperKeeper
  </NavLink>
<br/>
  <NavLink to="/signup"
  exact
  >
    Sign Up
  </NavLink>
  <br/>
  <NavLink to="/login"
  exact
  >
    Log In
  </NavLink>
  <br/>
  <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>


</div>


)



}
export default NavBar;