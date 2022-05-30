import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import Card138 from '../../components/Card138/Card138';
import '../SecondPageM/SecondPageM.css';
import mSun from '../../img/m_sunglasses.png';
import mEye from '../../img/m_eyeglasses.png';
const SecondPageM = () => {
    return (
        <div>
            <PageHeader num="2/10" />
            <Progress />
            <div className="all">
                <div className="quest">
                    What type of glasses are <br /> you looking for?
                </div>
                <Card138 information="Eyeglasses" img={mEye} height="21" />
                <Card138 information="Sunglasses" img={mSun} height="21" />
                <div className="last_t">I want to see both</div>
            </div>
        </div>
    );
};

export default SecondPageM;
