import React from 'react';
import logo from '../../img/logo1.png';
import key from '../../img/arrow_right.png';
import '../Header/Header.css';
const Header = () => {
    return (
        <div className="head">
            <div className="img">
                <img src={logo} />
            </div>
            <div className="key">
                <img src={key} />
            </div>
        </div>
    );
};

export default Header;
