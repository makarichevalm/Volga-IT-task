import React from 'react';
import './NinePage.css';
import Card from '../../components/CardText1/CardText1';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
const NinePage = () => {
    return (
        <div>
            <PageHeader num="9/10" />
            <Progress value="335px" />
            <div className="all">
                <div className="quest">
                    Are you looking for any <br /> particular eyewear brands?
                </div>
                <Card
                    text="Yes, I have some in mind"
                    height="120px"
                    width="274px"
                />
                <div className="ots"></div>
                <Card
                    text="No, brand isn't important"
                    height="117px"
                    width="274px"
                />
                <div className="otstup"></div>
            </div>
        </div>
    );
};

export default NinePage;
