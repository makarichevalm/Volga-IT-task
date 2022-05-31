import React from 'react';
import './FifthSun.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import ImgCard from '../../components/CardImgText/CardImgText';
import img1 from '../../img/51.png';
import img2 from '../../img/52.png';
import img3 from '../../img/53.png';
const FifthSun = () => {
    return (
        <div>
            <PageHeader num="5/10" />
            <Progress value="195px" />
            <div className="all">
                <div className="quest">
                    When you’re out and about, which <br /> shade of lenses do
                    you prefer?
                </div>
                <ImgCard
                    img={img1}
                    text="Dark Shade"
                    height="87px"
                    width="302px"
                    himg="35px"
                    wimg="43px"
                    padleft="28px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img2}
                    text="Light Shade"
                    height="87px"
                    width="302px"
                    himg="35px"
                    wimg="44px"
                    padleft="28px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img3}
                    text="Transitioning Shade"
                    height="87px"
                    width="302px"
                    himg="32px"
                    wimg="52px"
                    padleft="24px"
                />
                <div className="otstup"></div>
            </div>
        </div>
    );
};

export default FifthSun;
