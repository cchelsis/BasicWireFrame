//navbar background about 75px high, 100% across
//small logo
//three links to the left
//two links to the right
import React from 'react'
export const NavLinksLeft = (props) => {
    return (
        <div>
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
        <div>
            <div>
                <a href="">LinkRight1</a>
            </div>
            <div>
                <a href="">LinkRight2</a>
            </div>
        </div>
    );
}

export const Logo = (props) => {
    return (
        <div>
            {/* <img src={"./static/images/Sakura(5).jpg"} alt="" className="Logo"></img>  */}
        </div>
    );
};
