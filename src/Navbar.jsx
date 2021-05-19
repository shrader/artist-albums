import React from 'react';
import './Navbar.css';

function Navbar({ artistName, artistLink, albumCount }) {
  
  return (
    <div className="main-navbar-div">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <h4>
            <a className="nav-link active" href={artistLink}>{artistName}</a>
          </h4>
          <div className="count">
            <h4> Albums: 
              <span className="green">
                {` ${albumCount}`} 
              </span>
            </h4>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
