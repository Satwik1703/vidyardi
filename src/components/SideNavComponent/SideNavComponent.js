import React from 'react';

function SidenavComponent(props){
  return(
    <div>
      <a
        className="nav-link collapsed"
        href="#0"
        data-toggle="collapse"
        data-target={"#collapseLayouts"+props.index}
        aria-expanded="false"
        aria-controls={"collapseLayouts"+props.index}
      >
        {/* <div className="sb-nav-link-icon">
          <i className="fas fa-columns" />
        </div> */}
        {props.menuName}
        <div className="sb-sidenav-collapse-arrow">
          <i className="fas fa-angle-down" />
        </div>
      </a>
      <div
        className="collapse"
        id={"collapseLayouts"+props.index}
        aria-labelledby="headingOne"
        data-parent="#sidenavAccordion"
      >
        <nav className="sb-sidenav-menu-nested nav">
          <a className="nav-link" href="layout-static.html">
            Property 1
          </a>
          <a className="nav-link" href="layout-sidenav-light.html">
            Property 2
          </a>
        </nav>
      </div>
    </div>
  )
}

export default SidenavComponent;
