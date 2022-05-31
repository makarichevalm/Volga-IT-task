import React from 'react';
import './FifthEye.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import CardText from '../../components/CardText1/CardText1';

const FifthEye = () => {
    return (
        <div>
            <PageHeader num="5/10" />
            <Progress value="195px" />
            <div className="all">
                <div className="quest">
                    Would you like to protect your eyes <br /> from light
                    emanating from screens?
                </div>
                <div className="styleCard">
                    <CardText text="Yes" height="136px" width="271px" />
                </div>
                <div className="ots"></div>
                <div className="styleCard">
                    <CardText text="No" height="136px" width="271px" />
                </div>
                <div className="otstup"></div>
            </div>
        </div>
    );
};

export default FifthEye;
