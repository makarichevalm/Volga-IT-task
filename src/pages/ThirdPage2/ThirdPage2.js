import React from 'react';
import './ThirdPage2.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import CardText from '../../components/CardText1/CardText1';

const ThirdPage2 = () => {
    return (
        <div>
            <PageHeader num="3/10" />
            <Progress value="124px" />
            <div className="all">
                <div className="quest">What do you need your glasses for?</div>
                <CardText text="Near Vision" height="82px" width="292px" />
                <div className="ots"></div>
                <CardText text="Distance Vision" height="82px" width="292px" />
                <div className="ots"></div>
                <CardText
                    text="Multifocal / Progressive"
                    height="82px"
                    width="292px"
                />
                <div className="last_t">Skip</div>
            </div>
        </div>
    );
};

export default ThirdPage2;
