//footer 30 px high 100% across
//four links on each side, 8 in total. 

import React from 'react'

export const FooterLinkLeft = (props) => {
    return (
        <div className='footerleft'>
            
            <a href="">FooterLeft1</a>
        
        
            <a href="">FooterLeft2</a>
        
        
            <a href="">FooterLeft3</a>
        
        
            <a href="">FooterLeft4</a>
        
        </div>
    );
};


export const FooterLinkRight = (props) => {
    return (
        
        <div className='footerright'>
            <a href="">Footerright1</a>
            
            
            <a href="">Footerright2</a>
        
        
            <a href="">Footerright3</a>
       
        
            <a href="">Footerright4</a>

        </div>
    );
};