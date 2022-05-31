import React from 'react';
import './SixBoth.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import ImgCard from '../../components/CardImgText/CardImgText';
import img1 from '../../img/b61.svg';
import img2 from '../../img/b62.svg';
import img3 from '../../img/b63.svg';
const SixBoth = () => {
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
                    himg="41px"
                    wimg="78px"
                    padleft="22px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img2}
                    text="I have a round face"
                    height="87px"
                    width="312px"
                    himg="38px"
                    wimg="78px"
                    padleft="22px"
                />
                <div className="ots"></div>
                <ImgCard
                    img={img3}
                    text="In between"
                    height="87px"
                    width="312px"
                    himg="41px"
                    wimg="77px"
                    padleft="22px"
                />
                <div className="last_t">I don’t know</div>
            </div>
        </div>
    );
};

export default SixBoth;
