import React, { Component } from 'react';
import {Logo} from './navbar';
import {NavLinksRight} from './navbar';
import {NavLinksLeft} from './navbar';
import {FooterLinkLeft} from './footer';
import {FooterLinkRight} from './footer';


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          <div className='app'>
            <img src={"./static/assets/images/omegastar.jpg"}></img>
            <NavLinksLeft/>
            <h1>CSS DESIGNS</h1>
            
            <NavLinksRight/>
          </div>
          <div className='aboutpage'>
            <h2>
              Welcome Message
            </h2>
          </div>
          <div className='aboutyou'>
            <img src={"./static/assets/images/profilepic.jpg"}></img>
          </div>
          <div className='footerleft'>
            <FooterLinkLeft/>
          </div>
          <div className='footerright'>
            <FooterLinkRight/>
          </div>

      </div>
    );
  };


 
}
