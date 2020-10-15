import React from 'react';
import './Homepage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TopNavigation from '../TopNavigation/TopNavigation';
import SideNavComponent from '../SideNavComponent/SideNavComponent';

class Homepage extends React.Component{

  render(){
    if(!this.props.userDetails){
      return( <Redirect to='/' /> )
    }

    return(
      <div className="sb-nav-fixed">
        <TopNavigation />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">

                  {this.props.menuItems.map((item, index) => {
                    if(item.subFunctionId == 0){
                      return( <SideNavComponent menuName={item.menuname} index={index} />)
                    }
                  })}

                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {this.props.userDetails.UserName}
              </div>
            </nav>
          </div>;

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userDetails: state.user.userDetails,
  menuItems: state.user.menuItems
})

export default connect(mapStateToProps)(Homepage);
