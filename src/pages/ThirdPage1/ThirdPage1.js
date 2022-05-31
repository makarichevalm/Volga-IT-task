import React from 'react';
import './ThirdPage1.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import CardText from '../../components/CardText1/CardText1';

const ThirdPage1 = () => {
    return (
        <div>
            <PageHeader num="3/10" />
            <Progress value="124px" />
            <div className="all">
                <div className="quest">Do you need vision correction?</div>
                <CardText text="Yes" height="118px" width="273px" />
                <div className="ots"></div>
                <CardText text="No" height="115px" width="273px" />
                <div className="last_t">Skip</div>
            </div>
        </div>
    );
};

export default ThirdPage1;
