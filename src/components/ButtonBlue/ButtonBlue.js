import React from 'react';
import '../ButtonBlue/ButtonBlue.css';
const ButtonBlue = ({ text }) => {
    return (
        <div className="blue_but">
            <button className="but_main">
                <div className="but_text">{text}</div>
            </button>
        </div>
    );
};

export default ButtonBlue;
