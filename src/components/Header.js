import React from 'react';

function Header() {
  return (

    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
      <div className="container d-flex align-items-center">

        <div className="logo mr-auto">
          <h1 className="text-light"><a href="index.html"><span>Vidyardi</span></a></h1>
        </div>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="#coading">Coading for Kids</a></li>
            <li><a href="#course">Buy a Course</a></li>
            <li><a href="#material">Study Material</a></li>
            <li><a href="#classes">My Classes</a></li>
            <li><a href="#others">Others</a></li>
          </ul>
        </nav>
        </div>
      </header>
  );
};

export default Header;
