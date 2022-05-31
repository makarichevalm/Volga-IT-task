import React from 'react';
import './CardText1.css';
const Card = ({ text, height, width }) => {
    return (
        <div>
            <div className="styleCard">
                <div className="card" style={{ height: height, width: width }}>
                    <div className="inf">{text}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
