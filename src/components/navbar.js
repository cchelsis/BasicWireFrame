//navbar background about 75px high, 100% across
//small logo
//three links to the left
//two links to the right
import React from 'react'
export const NavLinksLeft = (props) => {
    return (
        <div className='navlinksleft'>
            <div>
                <a href="">LinkLeft1</a>
            </div>
            <div>
                <a href="">LinkLeft2</a>
            </div>
            <div>
                <a href="">LinkLeft3</a>
            </div>
        </div>
    );
};

export const NavLinksRight = (props) => {
    return (
        <div className='navlinksright'>
            <div>
                <a href="">LinkRight1</a>
            </div>
            <div>
                <a href="">LinkRight2</a>
            </div>
        </div>
    );
}


