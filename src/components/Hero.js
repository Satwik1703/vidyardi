import React from 'react';

import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import heroImg from '../assests/hero.png';
import SignIn from './SignIn';

function Hero(){
  return(
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pt-3 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div data-aos="zoom-out">
              <Card style={{borderRadius: '25px', paddingBottom: '25px'}}>
                <CardContent>
                  <SignIn />

                </CardContent>
              </Card>
          </div>
          </div>
          <div
            className="col-lg-7 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay={300}
          >
            <img src={heroImg} className="img-fluid animated" alt="hero-img" />
          </div>
        </div>
      </div>
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={3}
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={0}
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
        </g>
      </svg>
    </section>

  )
}

export default Hero;
