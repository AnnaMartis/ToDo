import {useContext } from 'react';
import React from "react";
import "../css/Navbar.css";
import {SelectedContext} from '../App'

const Navbar = () => {

  const {selectedNavbar, setSelectedNavbar} = useContext(SelectedContext);
  
  const handleNavigation = (ev) => {
    if (ev.target.className === "All") {
      setSelectedNavbar("all")
    } else if(ev.target.className === "Active") {
      setSelectedNavbar("active")
    } else {
      setSelectedNavbar("completed")
    }
  }

  return (
    <>
      <div className="Navbar">
        <p className="All" onClick={handleNavigation}>All</p>
        <p className="Active"  onClick={handleNavigation}>Active</p>
        <p className="Completed" onClick={handleNavigation}>Completed</p>
      </div>
      <div className="Line">
        <div className={selectedNavbar==="all" ? "AllLine active" : "AllLine"}   >
        </div>
        <div className={selectedNavbar==="active" ? "ActiveLine active" : "ActiveLine"}>
        </div>
        <div className={selectedNavbar==="completed" ? "CompletedLine active" : "CompletedLine"}>
        </div>
      </div>
    </>
  );
};

export default Navbar;
