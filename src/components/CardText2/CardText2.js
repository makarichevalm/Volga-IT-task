import React from 'react';
import './CardText2.css';
const CardText2 = ({ text, size, height, width }) => {
    return (
        <div>
            <div className="card" style={{ height: height, width: width }}>
                <div className="inf">{text}</div>
                <div className="size">{size}</div>
            </div>
        </div>
    );
};

export default CardText2;
