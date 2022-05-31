import React from 'react';
import './Between2to3.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import Img from '../../img/like23.png';
const Between2to3 = () => {
    return (
        <div>
            <PageHeader num="3/10" />
            <Progress value="124px" />
            <div className="all">
                <div className="Like">
                    <img src={Img} />
                </div>
                <div className="text">Let's get to know you!</div>
            </div>
        </div>
    );
};

export default Between2to3;
