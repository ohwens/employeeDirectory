import React from "react";

function Navbar(props){
    return(
        <form className="search">
    <div className="form-group search-widget">
    <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Search for employees."
          id="employee"
        />
    </div>
        </form>
    )
}

export default Navbar;