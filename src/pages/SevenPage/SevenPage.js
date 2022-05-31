import React from 'react';
import './SevenPage.css';
import Card from '../../components/CardText1/CardText1';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
const SevenPage = () => {
    return (
        <div>
            <PageHeader num="7/10" />
            <Progress value="255px" />
            <div className="all">
                <div className="quest">
                    How would you define <br /> your facial features?
                </div>
                <Card text="Sharp" height="95px" width="312px" />
                <div className="ots"></div>
                <Card text="Rounded" height="95px" width="312px" />
                <div className="ots"></div>
                <Card text="In between" height="95px" width="312px" />
                <div className="last_t">I don’t know</div>
            </div>
        </div>
    );
};

export default SevenPage;
