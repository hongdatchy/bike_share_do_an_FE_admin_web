import React from "react";
import { NavLink } from "react-router-dom";

export function Header (){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="/#">BIKE SHARE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={"/station"} className="nav-link js-scroll-trigger">Station</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/user"} className="nav-link js-scroll-trigger">User</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to={"/contract"} className="nav-link js-scroll-trigger">Contract</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}