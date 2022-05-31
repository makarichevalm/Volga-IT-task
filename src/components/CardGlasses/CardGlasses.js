import React from 'react';
import './CardGlasses.css';
const CardGlasses = ({ img, text }) => {
    return (
        <div>
            <div className="styleCard">
                <div className="card">
                    <div className="photo">
                        <img src={img} />
                    </div>
                    <div className="inf">{text}</div>
                </div>
            </div>
        </div>
    );
};

export default CardGlasses;
