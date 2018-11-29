import React, { Component } from 'react';
import {NavLinksRight} from './navbar';
import {NavLinksLeft} from './navbar';
import {FooterLinkLeft} from './footer';
import {FooterLinkRight} from './footer';
import {ContactButton} from './aboutyou';


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
          
          <div className='app'>
            
            <img src={'/assets/images/omegastar.jpg'} />

            <div className='navlinks'>
                
                  <NavLinksLeft/>
                

                <h1>Omegakura</h1>

                
                 <NavLinksRight/>
                
            </div>
          </div>
          
          
          <div className='profilepic'>
              <img src={'/assets/images/profilepic.jpg'}/>
          </div>

          <div className='aboutpage'>
            
            
            <h3>
              We are Craig and Chelsi Stratton. <br></br>
              She does front-end, he does backend. <br></br>
              Together, ANYTHING is possible. 
              
            </h3>
            <div className='contactbutton'>
              <ContactButton/>
            </div>
            
          </div>
          <div className='aboutyou'>
            
            
          </div>
          <div className='footer'>
            <div className='footer-container'>
              <FooterLinkLeft/>  
              
              <FooterLinkRight/>
            </div>
          </div>
      </div>
    );
  };


 
}
