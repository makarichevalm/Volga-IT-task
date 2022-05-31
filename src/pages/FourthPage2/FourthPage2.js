import React from 'react';
import './FourthPage2.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import Progress from '../../components/ProgressLine/ProgressLine';
import CardText from '../../components/CardText1/CardText1';
const FourthPage2 = () => {
    return (
        <div>
            <PageHeader num="4/10" />
            <Progress value="155px" />
            <div className="all">
                <div className="quest">
                    How wide would you <br /> say your face is?
                </div>

                <div className="styleCard">
                    <CardText
                        text="Wider Than Average"
                        height="82px"
                        width="302px"
                    />
                </div>
                <div className="ots"></div>
                <div className="styleCard">
                    <CardText text="Average" height="82px" width="302px" />
                </div>
                <div className="ots"></div>
                <div className="styleCard">
                    <CardText
                        text="Narrower Than Average"
                        height="82px"
                        width="302px"
                    />
                </div>
                <div className="last_t">I’m not sure</div>
            </div>
        </div>
    );
};

export default FourthPage2;
