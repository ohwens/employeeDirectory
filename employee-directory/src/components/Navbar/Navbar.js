import React from "react";
import '../Navbar/nav.css'
import Search from "../SearchResults/SearchResults"




  function Navbar(props) {
    
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="navbar-brand">Employee Directory</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Search handleInputSearch={props.handleInputSearch} />
          </div>
        </div>
    </nav>
    );
  }

export default Navbar;
