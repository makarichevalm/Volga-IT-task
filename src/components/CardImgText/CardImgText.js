import React from 'react';
import './CardImgText.css';
import rect from '../../img/Rectangle.png';
const CardImgText = ({ img, text, height, width, himg, wimg, padleft }) => {
    return (
        <div>
            <div className="styleCard">
                <div className="card" style={{ height: height, width: width }}>
                    <div className="photo">
                        <img
                            src={img}
                            style={{
                                height: himg,
                                width: wimg,
                                'padding-left': padleft,
                            }}
                        />
                    </div>

                    <div className="rect">
                        <img src={rect} />
                    </div>
                    <div className="inf">{text}</div>
                </div>
            </div>
        </div>
    );
};

export default CardImgText;
