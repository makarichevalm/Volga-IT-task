import React from 'react';
import logo from '../../img/logo1.png';
import '../Header/Header.css';
const Header = ({ img, height }) => {
    return (
        <div className="head" style={{ height: height }}>
            <div className="img">
                <img src={logo} />
            </div>
            <div className="key">
                <img src={img} />
            </div>
        </div>
    );
};

export default Header;
