import React from 'react';
import './SixWomen.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import ImgCard from '../../components/CardImgText/CardImgText';
import img1 from '../../img/w61.svg';
import img2 from '../../img/w62.svg';
import img3 from '../../img/w63.svg';
const SixWomen = () => {
    return (
        <div>
            <PageHeader num="6/10" />
            <Progress value="235px" />
            <div className="all">
                <div className="quest">
                    Every face shape has a <br /> perfect fit. What’s yours?
                </div>
                <ImgCard
                    img={img1}
                    text="I have a long face"
                    height="87px"
                    width="312px"
                    himg="51px"
                    wimg="37px"
                    padleft="24px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img2}
                    text="I have a round face"
                    height="87px"
                    width="312px"
                    himg="48px"
                    wimg="37px"
                    padleft="24px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img3}
                    text="In between"
                    height="87px"
                    width="312px"
                    himg="50px"
                    wimg="38px"
                    padleft="23px"
                />
                <div className="last_t">I don’t know</div>
            </div>
        </div>
    );
};

export default SixWomen;
