import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import Card138 from '../../components/Card138/Card138';
import '../SecondPageW/SecondPageW.css';
import wSun from '../../img/w_sunglasses.png';
import wEye from '../../img/w_eyeglasses.png';
const SecondPageW = () => {
    return (
        <div>
            <PageHeader num="2/10" />
            <Progress />
            <div className="all">
                <div className="quest">
                    What type of glasses are <br /> you looking for?
                </div>
                <Card138 information="Eyeglasses" img={wEye} height="21" />
                <Card138 information="Sunglasses" img={wSun} height="21" />
                <div className="last_t">I want to see both</div>
            </div>
        </div>
    );
};

export default SecondPageW;
