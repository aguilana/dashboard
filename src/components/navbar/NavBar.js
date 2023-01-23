import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo192.png";
import { useAuth } from "../context/AuthContext";

const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">What Are We?</Link>
    </p>
    <p>
      <Link to="/experience">Experience</Link>
    </p>
    <p>
      <Link to="/blog">Library</Link>
    </p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { currentUser, logout } = useAuth();

  const handleLogOut = () =>{
    try{
      logout()
    }
    catch(err){
      console.log(err.message)
    }
  }

  return (
    <div className="dashboard__navbar">
      <div className="dashboard__navbar-links">
        <div className="dashboard__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="dashboard__navbar-links_container">
          <Menu />
        </div>
        <div className="dashboard__navbar-sign">
          <p>
            {!currentUser ? <Link to="/login">Sign In</Link> : null}
          </p>
         {!currentUser ? <Link to="/signup">
            <button type="button">Sign up</button>
          </Link>: <button onClick={handleLogOut}>Log Out</button>}
        </div>
        <div className="dashboard__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="dashboard__navbar-menu_container scale-up-center">
              <div className="dashboard__navbar-menu_container-links">
                <Menu />
                <div className="dashboard__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <Link to="/signup">
                    <button type="button">Sign up</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
