import PropTypes from 'prop-types';
import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";


export const Navbar = ({title, subheading, handleChange, isChecked})=>{
  const [val, setVal] = useState(isChecked);

    return (
        <nav>
            <div className="logo">
              <h3>
                <NavLink className="NavLink" to="/">Hero-logo</NavLink>
              </h3>
            </div>

            <div className="Menu-options">
              <div className="menu__theme">
                <input type="checkbox"
                className="toggle"
                id="theme-toggle"
                onChange={handleChange}
                checked={isChecked}
                />
                <label htmlFor="theme-toggle">Dark Mode</label>
              </div>
                <h6><label htmlFor="dropdown-toggle">Menu</label>
                  <input type="checkbox" id="dropdown-toggle"
                  />
                </h6>
                <div className="dropdown">
                  <ul>
                      <li><NavLink className="NavLink" to="/" ></NavLink></li>
                      <li><NavLink className="NavLink" to="/about" >About</NavLink></li>
                      <li><NavLink className="NavLink" to="/contact" >Contact</NavLink></li>
                      <li><NavLink className="NavLink" to="/faq" >FAQ</NavLink></li>
                  </ul>
                </div>
            </div>
        </nav>
    );
}

Navbar.Proptypes = {
    title : PropTypes.string.isRequired,
    subheading : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Zain-Soft",
    subheading: "Options"
}
