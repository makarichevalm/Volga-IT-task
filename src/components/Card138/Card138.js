import React from 'react';
import '../Card138/Card138.css';
const Card138 = ({ information, img, height, width }) => {
    return (
        <div className="space_card">
            <div className="card_138">
                <div className="photo">
                    <img src={img} style={{ height: height, width: width }} />
                </div>
                <div className="info">{information}</div>
            </div>
        </div>
    );
};

export default Card138;
