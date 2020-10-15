import React from 'react';

function TopNavigation(){
  return(
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand" href="index.html">
        Vidyardi
      </a>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0"
        id="sidebarToggle"
        href="#"
        onClick={() => {
          document.querySelector("#sidebarToggle").addEventListener("click", function(e){
            e.preventDefault();
            document.querySelector(".sb-nav-fixed").classList.toggle("sb-sidenav-toggled");
          })
        }}
      >
        <i className="fas fa-bars" />
      </button>
      {/* Required Only for Css*/}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      </form>
      {/* Navbar*/}
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            href="#0"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw" />
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a className="dropdown-item" href="#0">Account Information</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="login.html">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavigation;
